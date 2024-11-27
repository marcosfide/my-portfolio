import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
    return ( 
        <div>
            <ContainerPage>
                <TransitionPage/>
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos{' '} 
                        <span className="text-yellow-600 font-bold">
                            trabajos realizados
                        </span>
                    </h1>
                    <div className="relative z-10 grid max-w-5xl gap-6 md:gap-8 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-2">
                        {dataPortfolio.map((data) => (
                            <PortfolioBox key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </ContainerPage>
        </div>
     );
}
 
export default PortfolioPage;