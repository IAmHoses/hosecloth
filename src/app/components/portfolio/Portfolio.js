import './Porfolio.css';

function Portfolio() {
  return (
    <row className={"Portfolio"}>
      <td className={"Portfolio-item"}>
        <a href={"https://dl.dropboxusercontent.com/s/veb1stlwuju2fql/Hosecloth%20Resume.pdf?dl=0"}
           className={"Portfolio-item-text"}>Resume</a>
      </td>
      <td className={"Portfolio-item"}>
        <a href={"https://www.linkedin.com/in/marc-hosecloth/"} target="_blank"
           className={"Portfolio-item-text"}>LinkedIn</a>
      </td>
      <td className={"Portfolio-item"}>
        <a href={"https://github.com/TheHosecloth"} target="_blank" className={"Portfolio-item-text"}>Github</a>
      </td>
    </row>
  );
}

export default Portfolio;