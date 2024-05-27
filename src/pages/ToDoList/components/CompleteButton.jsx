import PropTypes from "prop-types";
import actions from "../../../hooks/useCRUD/actions";

CompleteButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  payload: PropTypes.object.isRequired,
};

export default function CompleteButton({ dispatch, payload }) {
  function handleComplete() {
    dispatch({
      type: actions.delete,
      payload,
    });
  }

  return (
    <button
      className="max-h-5 min-h-5 min-w-5 max-w-5 rounded-full border border-LM-accent-light dark:border-DM-accent-light cursor-pointer flex items-center justify-center group translate-y-[2px]"
      onClick={handleComplete}
    >
      <div className="max-h-2 min-h-2 max-w-2 min-w-2 rounded-full bg-LM-accent-light dark:bg-DM-accent-light invisible group-hover:visible group-focus:visible"></div>
    </button>
  );
}
