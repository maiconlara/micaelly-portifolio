import { MagicCard } from "../magicui/magic-card";
import { CareerItem } from "@/types/career";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CareerCardProps {
  careerItem: CareerItem;
}

export const CareerCard = ({ careerItem }: CareerCardProps) => {
  return (
    <MagicCard className="flex flex-col rounded-xl w-full h-full lg:h-[514px]">
      <div className="flex flex-col items-start justify-between lg:h-[514px] w-full rounded-xl py-10 p-6 md:p-8 bg-transparent ">
        <div className="flex flex-col item-start justify-start w-full gap-3">
          <div className="flex flex-row w-full items-center justify-between">
            <p className="text-white text-xl font-semibold font-title cursor-default">
              {careerItem.title}
            </p>
            {careerItem.icon}
          </div>
          <p className="text-gray-secondary text-sm font-semibold font-text cursor-default -mt-1">
            {careerItem.company}
          </p>
          <div className="flex flex-col w-full items-start justify-start gap-1 pt-3">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="flex w-1.5 h-1.5 rounded-full bg-purple-light" />
              <p className="text-purple-light text-base font-semibold font-text cursor-default">
                {careerItem.date}
              </p>
            </div>
            <ul className="mt-3 space-y-1 font-text">
              {careerItem.description.map((item, index) => (
                <li
                  key={index}
                  className="gap-2 flex text-base text-white/80 cursor-default"
                >
                  <span className="text-purple-light">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex  flex-col w-full  items-start justify-start gap-2 pt-10 lg:pt-0">
          <p className="text-purple-light text-base font-semibold font-text cursor-default">
            Tecnologias
          </p>

          <div className="flex flex-wrap gap-2 items-start justify-start w-full h-full">
            {careerItem.technologies.map((technology, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger >
                    <div className="flex flex-col items-center justify-center h-12 w-12 bg-black border border-lines rounded-xl">
                      {technology.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black text-white text-sm font-semibold font-text cursor-default border border-lines">
                    <p>{technology.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </MagicCard>
  );
};
