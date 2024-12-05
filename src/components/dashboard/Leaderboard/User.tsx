import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

type Props = {
  name: string;
  image: string;
  points: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
  index: number;
};

export default function User({
  name,
  image,
  points,
  accuracy_percentage,
  previous_accuracy_percentage,
  index,
}: Props) {
  const improvement = accuracy_percentage - previous_accuracy_percentage;

  return (
    <>
      <div className="flex items-center rounded-lg bg-card">
        <img
          src={image || "https://placehold.co/40x40?text=👤"}
          alt="User Avatar"
          className="mr-3 size-8 rounded-full sm:size-10"
        />
        <div className="flex-1">
          <h2 className="text-sm font-bold sm:text-base">{name}</h2>
          <p className="text-xs text-muted-foreground sm:text-sm">
            {points} Points - {accuracy_percentage}% Correct
          </p>
        </div>
        <div className="flex items-center">
          <span className={`mr-3 text-sm font-bold sm:text-base`}>
            {index + 1}
          </span>
          {improvement > 0 ? (
            <BsCaretUpFill className="size-5 text-green-500" />
          ) : (
            <BsCaretDownFill className="size-5 text-red-500" />
          )}
        </div>
      </div>
    </>
  );
}
