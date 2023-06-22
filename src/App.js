import logo from './components/img/img_Lp.svg';
import logoline from './components/img/img_LpLine.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Lp-logo" alt="logo" />
        <img src={logoline} className="Lp-logo-line" alt="logoline" />
      </header>
    </div>
  );
}

export default App;