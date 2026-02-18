"use server";

import {z} from "zod";
import {Resend} from "resend";
import {headers} from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function sendEmail(data: unknown) {
  const parsedData = contactFormSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error("Invalid form data");
  }
  const {name, email, subject, message} = parsedData.data;

  const envEmail = process.env.CONTACT_EMAIL;
  if (!envEmail) {
    throw new Error("CONTACT_EMAIL environment variable is not set");
  }

  const {data: emailData, error} = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: envEmail,
    replyTo: email, // Use the user's email for replies
    subject: subject,
    html: `
        <h2>New message via ahmedomran</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
  });

  if (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
  console.log("Email sent successfully:", emailData);
  return {
    success: true,
    message: "Email sent successfully!",
  };
}

export async function trackVisit() {
  const headerStore = await headers();
  const userAgent = headerStore.get("user-agent") || "Unknown Device";

  const ip = headerStore.get("x-forwarded-for") || "Unknown IP";
  const referer = headerStore.get("referer") || "Direct Visit";

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        content: `🚨 **New Portfolio Visitor!**\n**IP:** ${ip}\n**Device:** ${userAgent}\n**Source:** ${referer}`,
        username: "Portfolio Bot",
      }),
    });
  } catch (error) {
    console.error("Tracking failed", error);
  }
}
