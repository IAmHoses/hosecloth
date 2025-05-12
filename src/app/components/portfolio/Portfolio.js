import './Porfolio.css';

function Portfolio() {
  return (
    <row className={"Portfolio"}>
      <td className={"Portfolio-item"}>
        <a href={"https://docs.google.com/document/d/19Vv8zqr0573EDGojpB_L4x-bT2l-Zjo-kA_9NC5_ESQ/edit?usp=sharing"}
           target={"_blank"} rel={"noreferrer"}
           className={"Portfolio-item-text"}>Resume</a>
      </td>
      <td className={"Portfolio-item"}>
        <a href={"https://www.linkedin.com/in/marc-hosecloth/"}
           target={"_blank"} rel={"noreferrer"}
           className={"Portfolio-item-text"}>LinkedIn</a>
      </td>
      <td className={"Portfolio-item"}>
        <a href={"https://github.com/IAmHoses"}
           target={"_blank"} rel={"noreferrer"}
           className={"Portfolio-item-text"}>Github</a>
      </td>
    </row>
  );
}

export default Portfolio;