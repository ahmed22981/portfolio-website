'use client'

import {useEffect, useRef} from 'react'
import { trackVisit } from '@/lib/actions'

export default function AnalyticsTracker(){
    const hasLogged = useRef(false)

    useEffect(()=>{
        //prevent double logging in react strict mode
        if(!hasLogged.current){
            trackVisit()
            hasLogged.current = true
        }
    },[])

    return null;  //render nothing
}