export default function App() {
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
              src="/src/images/image-jeremy.png"
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
              className="time-option font-rubik text-base text-white opacity-60 cursor-pointer hover:opacity-100"
            >
              Daily
            </p>
            <p
              id="weekly-rate"
              className="time-option font-rubik text-base text-white opacity-60 cursor-pointer hover:opacity-100"
            >
              Weekly
            </p>
            <p
              id="monthly-rate"
              className="time-option font-rubik text-base text-white opacity-60 cursor-pointer hover:opacity-100"
            >
              Monthly
            </p>
          </div>
        </div>
        <div className="bg-navy-900 rounded-2xl cursor-pointer group hover:bg-hover-color">
          <div className="bg-orange-300 flex justify-end rounded-t-2xl">
            <img src="/src/images/icon-work.svg" className="relative z-0" />
          </div>
          <div className="bg-navy-900 rounded-2xl p-5 -mt-5 relative z-10 flex flex-col gap-10 max-[1025px]:p-3 group-hover:bg-hover-color">
            <div className="flex items-center justify-between">
              <p className="font-rubik text-lg text-white">Work</p>
              <img
                src="/src/images/icon-ellipsis.svg"
                className="hover:brightness-0 hover:invert cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-3 max-[430px]:flex-row max-[430px]:items-center max-[430px]:justify-between">
              <p
                id="work"
                className="text-white text-5xl font-rubik font-light"
              >
                32hrs
              </p>
              <p
                id="previous-work"
                className="font-rubik text-base text-white opacity-60"
              >
                Last-Week - 36hrs
              </p>
            </div>
          </div>
        </div>
        <div className="bg-navy-900 rounded-2xl cursor-pointer group hover:bg-hover-color">
          <div className="bg-blue-300 flex justify-end rounded-t-2xl">
            <img src="/src/images/icon-play.svg" className="relative z-0" />
          </div>
          <div className="bg-navy-900 rounded-2xl p-5 -mt-5 relative z-10 flex flex-col gap-10 max-[1025px]:p-3 group-hover:bg-hover-color">
            <div className="flex items-center justify-between">
              <p className="font-rubik text-lg text-white">Play</p>
              <img
                src="/src/images/icon-ellipsis.svg"
                className="hover:brightness-0 hover:invert cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-3 max-[430px]:flex-row max-[430px]:items-center max-[430px]:justify-between">
              <p
                id="play"
                className="text-white text-5xl font-rubik font-light"
              >
                10hrs
              </p>
              <p
                id="previous-play"
                className="font-rubik text-base text-white opacity-60"
              >
                Last-Week - 8hrs
              </p>
            </div>
          </div>
        </div>
        <div className="bg-navy-900 rounded-2xl cursor-pointer group hover:bg-hover-color">
          <div className="bg-pink-300 flex justify-end rounded-t-2xl">
            <img src="/src/images/icon-study.svg" className="relative z-0" />
          </div>
          <div className="bg-navy-900 rounded-2xl p-5 -mt-5 relative z-10 flex flex-col gap-10 max-[1025px]:p-3 group-hover:bg-hover-color">
            <div className="flex items-center justify-between">
              <p className="font-rubik text-lg text-white">Study</p>
              <img
                src="/src/images/icon-ellipsis.svg"
                className="hover:brightness-0 hover:invert cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-3 max-[430px]:flex-row max-[430px]:items-center max-[430px]:justify-between">
              <p
                id="study"
                className="text-white text-5xl font-rubik font-light"
              >
                4hrs
              </p>
              <p
                id="previous-study"
                className="font-rubik text-base text-white opacity-60"
              >
                Last-Week - 7hrs
              </p>
            </div>
          </div>
        </div>
        <div class="bg-navy-900 rounded-2xl cursor-pointer group hover:bg-hover-color">
          <div className="bg-green-300 flex justify-end rounded-t-2xl">
            <img src="/src/images/icon-exercise.svg" className="relative z-0" />
          </div>
          <div className="bg-navy-900 rounded-2xl p-5 -mt-2 relative z-10 flex flex-col gap-10 max-[1025px]:p-3 group-hover:bg-hover-color">
            <div className="flex items-center justify-between">
              <p className="font-rubik text-lg text-white">Exercise</p>
              <img
                src="/src/images/icon-ellipsis.svg"
                className="hover:brightness-0 hover:invert cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-3 max-[430px]:flex-row max-[430px]:items-center max-[430px]:justify-between">
              <p
                id="exercises"
                className="text-white text-5xl font-rubik font-light"
              >
                4hrs
              </p>
              <p
                id="previous-exercises"
                className="font-rubik text-base text-white opacity-60"
              >
                Last-Week - 5hrs
              </p>
            </div>
          </div>
        </div>
        <div className="bg-navy-900 rounded-2xl cursor-pointer group hover:bg-hover-color">
          <div className="bg-purple-300 flex justify-end rounded-t-2xl">
            <img src="/src/images/icon-social.svg" className="relative z-0" />
          </div>
          <div className="bg-navy-900 rounded-2xl p-5 -mt-13 relative z-10 flex flex-col gap-10 max-[1025px]:p-3 group-hover:bg-hover-color">
            <div className="flex items-center justify-between">
              <p className="font-rubik text-lg text-white">Social</p>
              <img
                src="/src/images/icon-ellipsis.svg"
                className="hover:brightness-0 hover:invert cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-3 max-[430px]:flex-row max-[430px]:items-center max-[430px]:justify-between">
              <p
                id="social"
                className="text-white text-5xl font-rubik font-light"
              >
                5hrs
              </p>
              <p
                id="previous-social"
                className="font-rubik text-base text-white opacity-60"
              >
                Last-Week-10hrs
              </p>
            </div>
          </div>
        </div>
        <div className="bg-navy-900 rounded-2xl cursor-pointer group hover:bg-hover-color">
          <div className="bg-yellow-300 flex justify-end rounded-t-2xl">
            <img
              src="/src/images/icon-self-care.svg"
              className="relative z-0"
            />
          </div>
          <div className="bg-navy-900 rounded-2xl p-5 -mt-5 relative z-10 flex flex-col gap-10 max-[1025px]:p-3 group-hover:bg-hover-color">
            <div className="flex items-center justify-between">
              <p className="font-rubik text-lg text-white">Self Care</p>
              <img
                src="/src/images/icon-ellipsis.svg"
                className="hover:brightness-0 hover:invert cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-3 max-[430px]:flex-row max-[430px]:items-center max-[430px]:justify-between">
              <p
                id="care"
                className="text-white text-5xl font-rubik font-light"
              >
                2hrs
              </p>
              <p
                id="previous-care"
                className="font-rubik text-base text-white opacity-60"
              >
                Last-Week-2hr
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
