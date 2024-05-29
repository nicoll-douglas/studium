import {
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

/* 
  Notes to self:
    - Keyboard sensor activated with space or enter on drag handle
    - Works fine normally and dragging is keyboard accessible
    - There is a bug when using NVDA where dragging doesn't work
    - Space and enter key press events don't dispatch key down events
    - Therefore dnd-kit not detecting it as a valid event to initiate drag start and activate sensors
    - Might just be a screen reader thing
*/

export default function useTouch() {
  const touchSensor = useSensor(TouchSensor);
  const mouseSensor = useSensor(MouseSensor);
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });
  const sensorSetup = useSensors(touchSensor, mouseSensor, keyboardSensor);
  return sensorSetup;
}
