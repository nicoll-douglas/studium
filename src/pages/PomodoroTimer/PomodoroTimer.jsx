import { useState } from "react";

import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Timer from "./components/timer/Timer";
import ToggleInfoButton from "./components/ToggleInfoButton";
import InfoParagraph from "./components/InfoParagraph";

export default function PomodoroTimer() {
  const [infoExpanded, setInfoExpanded] = useState(false);

  return (
    <Container>
      <div className="w-full flex justify-between">
        <Heading variant="Pomodoro Timer" />
        <ToggleInfoButton
          onClick={() => setInfoExpanded(!infoExpanded)}
          expanded={infoExpanded}
        />
      </div>
      <InfoParagraph hidden={!infoExpanded} />
      <Timer />
    </Container>
  );
}
