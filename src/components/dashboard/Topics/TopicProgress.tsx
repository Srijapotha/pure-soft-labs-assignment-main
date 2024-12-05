import { Progress } from "@/components/ui/progress";

type TopicProps = {
  name: string;
  image: string;
  correct_percentage: number;
  bg: string;
};

export default function TopicsProgress({
  name,
  image,
  correct_percentage,
  bg,
}: TopicProps) {
  return (
    <>
      <div className="flex items-center">
        <img
          className="h-auto w-10 rounded-lg sm:w-14"
          src={image}
          alt="Food Safety"
          loading="lazy"
        />
        <div className="ml-4 flex-1">
          <div className="text-sm font-semibold sm:text-base">{name}</div>
          <div className="flex items-center gap-3">
            <Progress
              value={correct_percentage}
              data-bg={bg}
              className="h-2 sm:h-2.5"
            />
            <div className="text-nowrap text-xs text-muted-foreground sm:text-sm">
              <span className="font-medium text-foreground/85">
                {correct_percentage}%
              </span>{" "}
              Correct
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
