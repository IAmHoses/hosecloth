import './App.css';

import Bio from './components/bio/Bio.js';
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className={"App"}>
      <header className={"App-header"}></header>

      <body className={"App-body"}>
        <Bio/>
        <Portfolio/>
      </body>

      <footer className={"App-footer"}></footer>
    </div>
  );
}

export default App;
