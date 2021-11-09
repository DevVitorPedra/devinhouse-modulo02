import MainHeader from './components/Header/Main-Header/MainHeader';
import {ThemeProvider} from 'styled-components'
import {Light} from './components/GlobalStyle/Themes/light';
import GlobalStyle from './components/GlobalStyle/global';
import MainSection from './components/MainSection/MainSection';
function App() {
  return (
    <ThemeProvider theme={Light}>
   
    <div className="App">
      <GlobalStyle/>
        <MainHeader/>
        <MainSection/>
    </div>
  
    </ThemeProvider>
  );
}

export default App;
