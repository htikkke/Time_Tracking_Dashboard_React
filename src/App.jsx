import { useState } from "react";
import timeData from "./data.json";

const cardTheme = {
  Work: { bg: "bg-orange-300", icon: "/src/images/icon-work.svg" },
  Play: { bg: "bg-blue-300", icon: "/src/images/icon-play.svg" },
  Study: { bg: "bg-pink-300", icon: "/src/images/icon-study.svg" },
  Exercise: { bg: "bg-green-300", icon: "/src/images/icon-exercise.svg" },
  Social: { bg: "bg-purple-300", icon: "/src/images/icon-social.svg" },
  "Self Care": { bg: "bg-yellow-300", icon: "/src/images/icon-self-care.svg" },
};

export default function App() {
  const [timeState, setTimeState] = useState("weekly");
  return (
    // main-container
    <div
      id="main-container"
      className="w-full h-screen bg-navy-950 flex items-center justify-center max-[430px]:h-auto"
    >
      {/* grid-container */}
      <div className="w-3/4 h-3/4 grid grid-cols-4 grid-rows-2 gap-5 max-[770px]:w-full max-[770px]:m-2 max-[430px]:h-auto max-[430px]:grid-cols-1 max-[430px]:grid-rows-7 max-[430px]:m-4">
        {/* container-1 */}
        <div className="row-span-2 bg-navy-900 rounded-b-2xl max-[430px]:row-span-1">
          <div className="bg-purple-600 rounded-2xl flex flex-col gap-12 px-10 pt-10 pb-14 max-[1025px]:p-5 max-[430px]:flex-row">
            <img
              src="./images/image-jeremy.png"
              className="w-20 h-20 border-3 border-white rounded-full"
            />
            <div className="flex flex-col gap-4">
              <p className="font-rubik text-sm text-white opacity-60">
                Report for
              </p>
              <p className="font-rubik text-4xl text-white font-light">
                Jeremy Robson
              </p>
            </div>
          </div>
          <div className="bg-navy-900 p-10 rounded-b-2xl flex flex-col gap-6 max-[1025px]:p-5 max-[430px]:flex-row max-[430px]:justify-evenly">
            <p
              id="daily-rate"
              onClick={() => setTimeState("daily")}
              className={`font-rubik text-base text-white cursor-pointer transition-opacity ${
                timeState === "daily"
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              Daily
            </p>
            <p
              id="weekly-rate"
              onClick={() => setTimeState("weekly")}
              className={`font-rubik text-base text-white cursor-pointer transition-opacity ${
                timeState === "weekly"
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              Weekly
            </p>
            <p
              id="monthly-rate"
              onClick={() => setTimeState("monthly")}
              className={`font-rubik text-base text-white cursor-pointer transition-opacity ${
                timeState === "monthly"
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              Monthly
            </p>
          </div>
        </div>
        {/* other 2-7 containers */}
        {timeData.map((item, index) => {
          const currentHours = item.timeframes[timeState].current;
          const previousHours = item.timeframes[timeState].previous;

          const getTimeLabel = () => {
            if (timeState === "daily") return "Last-Day";
            if (timeState === "weekly") return "Last-Week";
            if (timeState === "monthly") return "Last-Month";
          };

          return (
            <div
              key={index}
              className="bg-navy-900 rounded-2xl cursor-pointer group hover:bg-hover-color"
            >
              <div
                className={`${cardTheme[item.title].bg} flex justify-end rounded-t-2xl`}
              >
                <img
                  src={cardTheme[item.title].icon}
                  alt={cardTheme[item.title]}
                  className="relative z-0"
                />
              </div>
              <div
                className={`bg-navy-900 rounded-2xl p-5 relative z-10 flex flex-col gap-10 max-[1025px]:p-3 group-hover:bg-hover-color ${
                  item.title === "Social"
                    ? "-mt-7 max-[1025px]:-mt-11"
                    : "-mt-3"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-rubik text-lg text-white">{item.title}</p>
                  <img
                    src="./images/icon-ellipsis.svg"
                    className="hover:brightness-0 hover:invert cursor-pointer"
                  />
                </div>
                <div className="flex flex-col gap-3 max-[430px]:flex-row max-[430px]:items-center max-[430px]:justify-between">
                  <p
                    id="work"
                    className="text-white text-5xl font-rubik font-light"
                  >
                    {currentHours}
                    {currentHours === "1" ? "hr" : "hrs"}
                  </p>
                  <p
                    id="previous-work"
                    className="font-rubik text-base text-white opacity-60 max-[770px]:text-sm"
                  >
                    {getTimeLabel()} - {previousHours}
                    {previousHours === "1" ? "hr" : "hrs"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
