import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

type Props = {
  group_name: string;
  points_per_user: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
  index: number;
};

export default function User({
  group_name,
  points_per_user,
  accuracy_percentage,
  previous_accuracy_percentage,
  index,
}: Props) {
  const improvement = accuracy_percentage - previous_accuracy_percentage;

  return (
    <>
      <div className="flex items-center">
        <div className="flex-1">
          <h2 className="text-sm font-bold sm:text-base">{group_name}</h2>
          <p className="text-xs text-muted-foreground sm:text-sm">
            {points_per_user} Points / User - {accuracy_percentage}% Correct
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
