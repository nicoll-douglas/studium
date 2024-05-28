import PropTypes from "prop-types";

InfoParagraph.propTypes = {
  hidden: PropTypes.bool.isRequired,
};

export default function InfoParagraph({ hidden }) {
  return (
    <section hidden={hidden} id="about-pomodoro">
      <p className="mb-4">
        The Pomodoro Technique is a time management method developed by
        Francesco Cirillo in the late 1980s. It uses a kitchen timer to break
        work into intervals, typically 25 minutes in length, separated by short
        breaks. Each interval is known as a pomodoro, from the Italian word for
        tomato, after the tomato-shaped kitchen timer Cirillo used as a
        university student.
      </p>
      <p>
        The original technique included short breaks of 5 minutes and after 4
        pomodoros a longer break of 15 minutes was taken. The technique is said
        to aid the assimilation of knowledge and mitigate the likelihood of
        disruption.
      </p>
    </section>
  );
}
