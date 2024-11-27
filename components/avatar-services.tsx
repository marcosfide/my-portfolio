import Image from "next/image";
import MotionTransition from "./transition-component";

const AvatarServices = () => {
    return ( 
        <MotionTransition position="right"
        className="bottom-0 left-0 hidden md:inline-block md:absolute md:z--10">
            <Image src="/services.png" width={300} height={300} className="w-[250px] h-full" alt="avatar-services"/>
        </MotionTransition>
     );
}
 
export default AvatarServices;