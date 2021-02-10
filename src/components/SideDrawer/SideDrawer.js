import {SideDrawerData} from './SideDrawerData';
import styled from 'styled-components';
import { MdClear } from "react-icons/md";

const SideDrawer = props => {
    
    let sideDrawerClass = 'side-drawer';
    if(props.show){
      sideDrawerClass = 'side-drawer open';
    }
    
    return (
        <Wrapper>
         <nav className={sideDrawerClass}>
           <a id="icon" onClick = {props.sideBarClose}> <MdClear /> </a>
           <ul>
            {SideDrawerData.map((item , key) => (
            <li className="side-drawer-list" key={key}>
                <a href = {item.link}> {item.icon} <span>{item.title}</span></a>
            </li>
            ))
            }
           </ul>
       </nav>
     </Wrapper>
)};
const Wrapper = styled.nav`
      .side-drawer{
          height:100%;
          background:white;
          box-shadow : 2px 0px 5px rgba(0,0,0,0.5);
          position:fixed;
          top:0;
          left:0;
          width:70%;
          max-width:300px;
          z-index: 200;
          transform :translateX(-100%);
          transition : transform 0.3s ease-out;
      }
      .side-drawer.open{
        transform : translateX(0);
      }
      .side-drawer ul{
        height:100%;
        width:auto;
        list-style:none;
        display:flex;
        flex-direction:column;
        justify-content:center;

    }
    .side-drawer li{
      margin: 10px 0;
     
    }
    .side-drawer a{
      text-decoration:none;
      color: black;
    }
    .side-drawer a span{
      border-bottom : 2px solid white;
      transition : border-bottom 1.5s;
    }
    .side-drawer a:hover span, .side-drawer a:active span{
      border-bottom: 2px solid black;
    }
    #icon{
      float:right;
      margin:5px;
      background:white;
      cursor:pointer;
    }
    
   
      
    `;

    

export default SideDrawer;