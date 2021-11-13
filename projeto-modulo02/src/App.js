import MainHeader from './components/Header/Main-Header/MainHeader';
import { useState } from 'react';
import {ThemeProvider} from 'styled-components'
import {Light,Dark} from './components/GlobalStyle/Themes/light';
import GlobalStyle from './components/GlobalStyle/global';
import MainSection from './components/MainSection/MainSection';
import {BrowserRouter as Router} from 'react-router-dom'
import { SearchContext } from './components/SearchContext/SearchContext';

function App() {
  const [currentTheme,setTheme] = useState(Dark)
  const [value,setValue] = useState('')
  
  return (
    <ThemeProvider theme={Light}>
    <div className="App">
     
      <GlobalStyle/>
        <MainHeader/>
        
        <Router>
           <SearchContext.Provider value ={{value,setValue}} >
        <MainSection/>
        </SearchContext.Provider>
        </Router>
    </div>
    
    </ThemeProvider>
  );
}

export default App;
