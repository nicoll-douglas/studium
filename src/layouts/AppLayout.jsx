import { Outlet } from "react-router-dom";
import { createContext, useEffect, useRef } from "react";

import SidebarMenu from "../components/ui/SidebarMenu";
import useTimer from "../hooks/useTimer/useTimer";

export const TimerContext = createContext();

export default function AppLayout() {
  const [timer, dispatch, getDisplay] = useTimer();
  const audioRef = useRef(null);

  useEffect(() => {
    if (timer.timeLeft <= 0) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
  }, [timer]);

  return (
    <div className="w-full flex flex-grow">
      <SidebarMenu />
      <div className="flex-grow flex flex-col items-center px-4 pb-19 ml-[234px] lg:ml-[218px] sm:ml-0 overflow-hidden">
        <audio ref={audioRef}>
          <source
            src="./timer-end.mp3"
            type="audio/mp3"
            aria-hidden={true}
            className="sr-only"
          />
        </audio>
        <TimerContext.Provider value={[timer, dispatch, getDisplay]}>
          <Outlet />
        </TimerContext.Provider>
      </div>
    </div>
  );
}
