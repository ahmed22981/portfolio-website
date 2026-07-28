// import GithubIcon from "../../../public/github.svg";
// import LinkedinIcon from "../../../public/linkedin.svg";
// import Link from "next/link";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="flex flex-col gap-2  md:flex-row py-2 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-muted-foreground order-last md:order-first">
//            Developed and designed by Ahmed Omran.
//         </p>
//         <nav className="md:ml-auto flex gap-4 md:gap-6">

//           <Link
//             href="https://github.com/ahmed22981"
//             className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Visit my GitHub profile"
//           >
//             <Image
//                 src={GithubIcon}
//                 alt="GitHub"
//                 className="invert-0 dark:invert transition-all duration-300"
//                 width={20}
//                 height={20}
//               />
//           </Link>
//             <Link
//                 href="https://www.linkedin.com/in/ahmed-omran-310a91317/"
//                 className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Visit my LinkedIn profile"
//             >
//               <Image
//                 src={LinkedinIcon}
//                 alt="LinkedIn"
//                 className="invert-0 dark:invert transition-all duration-300"
//                 width={20}
//                 height={20}

//                 />
//             </Link>
//         </nav>
//       </footer>
//   );
// }
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
        {/* Left */}
        <p className="text-center text-sm text-muted-foreground md:text-left">
          Designed &amp; Developed by{" "}
          <span className="font-semibold text-primary">Ahmed Omran</span> ©{" "}
          {new Date().getFullYear()}
        </p>

        {/* Right */}
        <nav className="flex items-center gap-5">
          <Link
            href="https://github.com/ahmed22981"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <Image
              src={GithubIcon}
              alt="GitHub"
              width={22}
              height={22}
              className="invert-0 transition-all duration-300 dark:invert"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/ahmed-hatem-omran/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <Image
              src={LinkedinIcon}
              alt="LinkedIn"
              width={22}
              height={22}
              className="invert-0 transition-all duration-300 dark:invert"
            />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
