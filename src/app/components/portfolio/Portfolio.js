import './Porfolio.css';

function Portfolio() {
  return (
    <row className={"Portfolio"}>
      <td className={"Portfolio-item"}>
        <a href={"https://docs.google.com/document/d/1bYLZiCjJV6KxfI2NRlgR1ABSefKNOT5X/edit"} target="_blank"
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