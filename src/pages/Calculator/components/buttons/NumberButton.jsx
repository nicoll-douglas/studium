import PropTypes from "prop-types";
import { useContext } from "react";
import { StorageContext } from "../../Calculator";

NumberButton.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default function NumberButton({ number }) {
  const [storage, setStorage] = useContext(StorageContext);

  function handleClick() {
    if (+number === 0 && storage.running === "0") return;
    setStorage({
      ...storage,
      running: `${storage.running === "0" ? "" : storage.running}${number}`,
    });
  }

  return (
    <button onClick={handleClick} className={+number === 0 ? "col-span-2" : ""}>
      {number}
    </button>
  );
}
