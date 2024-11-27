import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return ( 
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Toda mi{' '}
                    <span className="font-bold text-yellow-600">
                        trayectoria profesional
                    </span>
                </h1>
                <CounterServices/>
                <TimeLine/>
            </ContainerPage>
        </>
     );
}
 
export default AboutMePage;