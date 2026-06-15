import { PlatziIcon, LinkIcon, DateIcon } from "../../assets/icons/index.js";
import TextCardSlim from "./TextCardSlim.jsx";

const CourseCard = ({ title, academy, year, tags = [], url }) => {
    return (
        <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-primary/20 bg-card p-5">
            <div className="pointer-events-none absolute right-0 top-0 z-0 h-12 w-12 -translate-y-1/2 translate-x-1/2 scale-0 rounded-full bg-primary/10 transition-transform duration-500 ease-out group-hover:scale-[25]" />

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 outline-1">
                <PlatziIcon className="h-8 w-8" />
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="font-normal">{title}</h3>
                <p className="text-muted-foreground">{academy}</p>
                <div className="flex items-center gap-2">
                    <DateIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{year}</p>
                </div>
                <div className="flex items-center justify-between">
                    <ul className="my-2 flex max-w-xs flex-wrap gap-2">
                        {tags.map((t) => (
                            <li key={t.name}><TextCardSlim Text={t.name} /></li>
                        ))}
                    </ul>
                    <a className="self-start" href={url} target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="text-muted-foreground" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;