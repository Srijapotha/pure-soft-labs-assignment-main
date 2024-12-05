// ui
import BarChartComponent from "@/components/dashboard/Chart/BarChart";
import MiniChart from "@/components/dashboard/Chart/MiniChart";
import ButtonDownload from "@/components/dashboard/Download";
import BoxWrapper from "@/components/dashboard/Wrapper/BoxWrapper";
import { BoxContentBig } from "@/components/dashboard/Wrapper/BoxContent";
import TopicsProgress from "@/components/dashboard/Topics/TopicProgress";
import User from "@/components/dashboard/Leaderboard/User";
import Group from "@/components/dashboard/Leaderboard/Group";
import DropdownSelect from "@/components/dashboard/Dropdown/DropdownSelect";
import DropdownSearch from "@/components/dashboard/Dropdown/DropdownSearch";
import DropdownTopics from "@/components/dashboard/Dropdown/DropdownTopics";
import { DropdownMonth } from "@/components/dashboard/Dropdown/DropdownMonth";

// data
import data from "@/data/task-data.json";

const {
  active_users,
  questions_answered,
  average_session_length_seconds,
  starting_knowledge_percentage,
  current_knowledge_percentage,
} = data.metrics;
const total_knowledge_percentage =
  current_knowledge_percentage - starting_knowledge_percentage;

function secondsToMinute(seconds: number): string {
  // function to convert seconds to minute string
  const minutes = Math.floor(seconds / 60);
  if (!minutes) {
    return `${seconds}s`;
  }
  const remainingSeconds = seconds % 60;
  return `${minutes}m${remainingSeconds}s`;
}

export default function Reports() {
  return (
    <>
      <div className="flex items-center justify-between border-b bg-background py-5">
        <h2 className="text-lg font-bold text-foreground/95 md:text-xl">
          Reports
        </h2>

        <ButtonDownload />
      </div>
      <div className="mb-4 flex w-full gap-4 overflow-x-auto pb-1 pt-4">
        <DropdownSelect />
        <DropdownSearch />
        <DropdownTopics />
      </div>
      <div className="grid grid-cols-1 gap-4 pb-10 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-3 xl:gap-2">
          <BoxWrapper
            className="flex aspect-square flex-col justify-between"
            heading="Active Users"
            info
          >
            <div>
              <BoxContentBig text={active_users.current} />
              <span className="font-bold text-muted-foreground">
                /{active_users.total}
              </span>
            </div>
            <MiniChart />
          </BoxWrapper>
          <BoxWrapper
            className="flex aspect-square flex-col justify-between"
            heading="Questions Answered"
            info
          >
            <BoxContentBig text={questions_answered.toLocaleString()} />
            <MiniChart />
          </BoxWrapper>
          <BoxWrapper
            className="flex aspect-square flex-col justify-between"
            heading="Average Session Length"
            info
          >
            <BoxContentBig
              text={secondsToMinute(average_session_length_seconds)}
            />
            <MiniChart />
          </BoxWrapper>
          <BoxWrapper
            className="flex aspect-square flex-col justify-between"
            heading="Starting Knowledge"
            info
          >
            <BoxContentBig text={`${starting_knowledge_percentage}%`} />
            <MiniChart />
          </BoxWrapper>
          <BoxWrapper
            className="flex aspect-square flex-col justify-between"
            heading="Current Knowledge"
            info
          >
            <BoxContentBig text={`${current_knowledge_percentage}%`} />
            <MiniChart />
          </BoxWrapper>
          <BoxWrapper
            className="flex aspect-square flex-col justify-between"
            heading="Knowledge Gain"
            info
          >
            <BoxContentBig
              text={`${total_knowledge_percentage > 0 ? "+" : ""}${total_knowledge_percentage}%`}
            />
            <MiniChart />
          </BoxWrapper>
        </div>
        <BoxWrapper
          heading="Activity"
          className="flex flex-col [&_h3]:border-b"
        >
          <DropdownMonth />
          <BarChartComponent />
        </BoxWrapper>
        <BoxWrapper heading="Weakest Topics">
          <div className="space-y-6 pt-3">
            {data.topics.weakest.map((topic) => (
              <TopicsProgress {...topic} key={topic.name} bg="orange" />
            ))}
          </div>
        </BoxWrapper>
        <BoxWrapper heading="Strongest Topics">
          <div className="space-y-6 pt-3">
            {data.topics.strongest.map((topic) => (
              <TopicsProgress {...topic} key={topic.name} bg="green" />
            ))}
          </div>
        </BoxWrapper>
        <BoxWrapper heading="User Leaderboard">
          <div className="space-y-6 pt-3">
            {data.user_leaderboard.map((user, index) => (
              <User {...user} key={user.name} index={index} />
            ))}
          </div>
        </BoxWrapper>
        <BoxWrapper heading="Groups Leaderboard">
          <div className="space-y-6 pt-3">
            {data.groups_leaderboard.map((group, index) => (
              <Group {...group} key={group.group_name} index={index} />
            ))}
          </div>
        </BoxWrapper>
      </div>
    </>
  );
}
