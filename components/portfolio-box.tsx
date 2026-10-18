import Image from "next/image"
import Link from "next/link"

interface PortfolioBoxProps {
    data: {
        title: string,
        description?: string,
        tags?: string[],
        image: string,
        urlGithub?: string,
        urlGithubBack?: string;
        urlDemo: string
        urlVideo?: string,
        urlVideo2?: string
    }
}

const PortfolioBox = (props : PortfolioBoxProps) => {
    const { data } = props;
    const { title, description, tags, image, urlGithub, urlGithubBack, urlDemo, urlVideo, urlVideo2 } = data;

    return (
        <div className="flex flex-col p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl font-bold">
                {title}
            </h3>
            <Link href={urlDemo} target="_blank">
                <Image
                    src={image}
                    alt={`imagen del proyecto ${title}`}
                    width={760}
                    height={365}
                    className="w-full rounded-2xl h-auto cursor-pointer m-auto"
                />
            </Link>

            {description && (
                <p className="mt-4 text-gray-300">{description}</p>
            )}

            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs rounded-full border border-yellow-600/60 text-yellow-500">
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <div className="flex flex-wrap gap-5 mt-5 mx-auto">
                {urlGithub && (
                    <Link href={urlGithub} target="_blank" className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80">
                        Frontend
                    </Link>
                )}
                {urlGithubBack && (
                    <Link href={urlGithubBack} target="_blank" className="p-2 transition duration-150 rounded-lg bg-blue-500 hover:bg-blue-500/80">
                        Backend
                    </Link>
                )}
                <Link href={urlDemo} target="_blank" className="p-2 transition duration-150 rounded-lg bg-yellow-600 hover:bg-yellow-600/80">
                    {urlGithub ? "Demo" : "Ver sitio"}
                </Link>
                {urlVideo && (
                    <Link href={urlVideo} target="_blank" className="p-2 transition duration-150 rounded-lg bg-yellow-600 hover:bg-yellow-600/80">
                        Video
                    </Link>
                )}
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
