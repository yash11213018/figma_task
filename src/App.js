import Toolbar from './components/Toolbar/Toolbar';
import {  createGlobalStyle } from 'styled-components';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrawer from './components/BackDrawer/BackDrawer';
import {useState} from 'react';

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

  let backDrawer = null;
  const [drawerOpen , setDrawerOpen] = useState(false);

  const burgerClickHandler = () => (setDrawerOpen(!drawerOpen));
  const closeSidebarHandler = () => (setDrawerOpen(false));

  if(drawerOpen){
    backDrawer = <BackDrawer click = {closeSidebarHandler} />;
  }

  return (
    <div className="App" style = {{height:'100%'}}>
      <GlobalStyle />
      <Toolbar drawerToggleHandler={burgerClickHandler}/>  
      <SideDrawer show = {drawerOpen} sideBarClose = {closeSidebarHandler} />;
      {backDrawer}
    
    </div>
  );
}

export default App;
