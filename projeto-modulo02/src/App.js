import MainHeader from './components/Header/Main-Header/MainHeader';
import { useState } from 'react';
import {ThemeProvider} from 'styled-components'
import {Light,Dark} from './components/GlobalStyle/Themes/themes';
import GlobalStyle from './components/GlobalStyle/global';
import MainSection from './components/MainSection/MainSection';
import {BrowserRouter as Router} from 'react-router-dom'
import { SearchContext } from './components/SearchContext/SearchContext';
import Footer from './components/Footer-Menu/Footer';

function App() {
  const [currentTheme,setTheme] = useState(Light)
  const [value,setValue] = useState('')
  const toggleTheme = () =>{
      (currentTheme===Light) ? setTheme(Dark) : setTheme(Light)
  }
  return (
    <ThemeProvider theme={currentTheme}>
    <div className="App">
     
      <GlobalStyle/>
      <Router>
        <MainHeader current={currentTheme}  toggle = {toggleTheme}/>
        
      
           <SearchContext.Provider value ={{value,setValue}} >
        <MainSection/>
        </SearchContext.Provider>
        </Router>
        <Footer/> 
           </div>
    
    </ThemeProvider>
  );
}

export default App;
