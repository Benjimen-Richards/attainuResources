import "./Portfolio.css";
import FormJs from "./Contactpage";
import Personalinfo from "./Personalinfo";
const Protfoliohtml = () => {
  return (
    <>
      <div class="main">
        <h1 style={{ textAlign: "center" }}>PORTFOLIO</h1>
        <hr />

        <h2 style={{ textAlign: "center" }}>PERSONAL INFORMATION</h2>
        <div className="Personalinfo">
          <Personalinfo text="SCHOOLING" para="completed my school" />
          <Personalinfo text="INTER" para="completed my inter in MPc" />
          <Personalinfo text="BTECH" para="completed my in computer science" />
        </div>

        <hr />
        <h2 style={{ textAlign: "center" }}>PROJECTS</h2>
        <div className="project">
          <Personalinfo
            text="MAZE SOLVER"
            para="Complete maze solver project in attainu "
          />
        </div>
      </div>
      <hr />
      <h2 style={{ textAlign: "center" }}>CONTACT ME</h2>
      <FormJs />
    </>
  );
};
export default Protfoliohtml;
