import { Outlet, useLocation } from "react-router-dom";
import { createContext, useEffect, useRef, useState } from "react";

import SidebarMenu from "../components/ui/SidebarMenu";
import useTimer from "../hooks/useTimer/useTimer";
import mapToTitle from "../utils/titleMap";

export const TimerContext = createContext();
export const SRContext = createContext();

export default function AppLayout() {
  const [timer, dispatch, getDisplay] = useTimer();
  const audioRef = useRef(null);
  const location = useLocation();
  const [liveRegionText, setLiveRegionText] = useState("");

  useEffect(() => {
    if (timer.timeLeft <= 0) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
  }, [timer]);

  return (
    <div className="w-full flex flex-grow">
      <SidebarMenu />
      <main
        className="flex-grow flex flex-col items-center px-4 pb-19 ml-[234px] lg:ml-[218px] sm:ml-0 overflow-hidden"
        aria-label={`${mapToTitle(location.pathname)} App`}
      >
        <audio ref={audioRef}>
          <source
            src="./timer-end.mp3"
            type="audio/mp3"
            aria-hidden={true}
            className="sr-only"
          />
        </audio>
        <div className="sr-only" aria-live="polite">
          {liveRegionText}
        </div>
        <TimerContext.Provider value={[timer, dispatch, getDisplay]}>
          <SRContext.Provider value={setLiveRegionText}>
            <Outlet />
          </SRContext.Provider>
        </TimerContext.Provider>
      </main>
    </div>
  );
}
