import MainFeed from './components/mainFeed';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/mainFeed/globalStyles";
import { lightTheme, darkTheme } from "./components/mainFeed/Theme"
import {useDarkMode} from './components/mainFeed/useDarkMode';

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
    <div className="App">
      <header className="App-header">
        <MainFeed themeToggler={themeToggler}/>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
