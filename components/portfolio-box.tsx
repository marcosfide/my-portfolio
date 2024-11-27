import Image from "next/image"
import Link from "next/link"

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub:string,
        urlGithubBack?: string;
        urlDemo:string
        urlVideo:string,
        urlVideo2?:string
    }
}

const PortfolioBox = (props : PortfolioBoxProps) => {
    const { data } = props;
    const { id, title, image, urlGithub, urlGithubBack, urlDemo, urlVideo, urlVideo2 } = data;

    return ( 
        <div className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl font-bold">
                {title}
            </h3>
            <Link href={image} target="_blank">
                <Image 
                    src={image} 
                    alt={`imagen del proyecto ${title}`} 
                    width={200} 
                    height={200} 
                    className="w-full rounded-2xl h-auto cursor-pointer m-auto" 
                />
            </Link>

            <div className="flex flex-wrap gap-5 mt-5 mx-auto">
                <Link href={urlGithub} target="_blank" className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80">
                    Frontend
                </Link>
                {urlGithubBack && (
                    <Link href={urlGithubBack} target="_blank" className="p-2 transition duration-150 rounded-lg bg-blue-500 hover:bg-blue-500/80">
                        Backend
                    </Link>
                )}
                <Link href={urlDemo} target="_blank" className="p-2 transition duration-150 rounded-lg bg-yellow-600 hover:bg-yellow-600/80">
                    Demo
                </Link>
                <Link href={urlVideo} target="_blank" className="p-2 transition duration-150 rounded-lg bg-yellow-600 hover:bg-yellow-600/80">
                    Video
                </Link>
                {urlVideo2 && (
                    <Link href={urlVideo2} target="_blank" className="p-2 transition duration-150 rounded-lg bg-yellow-600 hover:bg-yellow-600/80">
                        Video 2
                    </Link>
                )}
            </div>
        </div>
    );
};
 
export default PortfolioBox;