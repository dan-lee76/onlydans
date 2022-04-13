import MainFeed from './components/mainFeed';
// import {ThemeProvider} from "styled-components";
// import { GlobalStyles } from "./components/globalStyles";
// import { lightTheme, darkTheme } from "./components/Theme"
// import { useState} from "react";
function App() {
  // const [theme, setTheme] = useState('light');
  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
// }
  return (
    <div className="App">
      <header className="App-header">
        <MainFeed/>
      </header>
    </div>
  );
}

export default App;
