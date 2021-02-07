import Toolbar from './components/Toolbar/Toolbar';
import {  createGlobalStyle } from 'styled-components';
import SideDrawer from './components/SideDrawer/SideDrawer';

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
    height:100%;
  }
  html{
    height:100%;
  }
  `;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Toolbar />  
      <SideDrawer />
    </div>
  );
}

export default App;
