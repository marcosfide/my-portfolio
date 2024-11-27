"use client"

import Image from "next/image";
import MotionTransition from "./transition-component";

const CircleImage = () => {
    return ( 
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:fixed">
            <Image src="/circles.png" width={200} height={200} alt="circle-image" className="w-full h-full"/>
        </MotionTransition>
     );
}
 
export default CircleImage;