import styled from 'styled-components';
import Hamburger from '../SideDrawer/Hamburger';
import {ToolbarData} from './ToolbarData';

const Toolbar = props => {
    return (
        <Wrapper>
         <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__hamburger">
                    <Hamburger click = {props.drawerToggleHandler}/>
                </div>
                <div className="toolbar__logo"><a href={ToolbarData.logo.link}>{ToolbarData.logo.name}</a></div>
                <div className="logo_seperator" />
                <div className="toolbar_navigation-items">
                    <ul>
                        {ToolbarData.items.map((item, key ) => (
                            <li key={key}>
                                <a href = {item.link} >{item.name}</a>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </nav>
         </header>
        </Wrapper>
    );
    
}
const Wrapper = styled.header`
       .toolbar{
           position:fixed;
           width:100%;
           top:0;
           height:56px;
           left:0;
           background : black;
       }
       .toolbar__navigation{
           display:flex;
           flex-direction: row;
           height:100%;
           align-items : center;
       }
       .toolbar__logo{
           margin-left : 1rem;
       }
       .toolbar__logo a{
           color:white;
           text-decoration:none;
           font-size:1.5rem;
       }
       .toolbar_navigation-items a{
        color:white;
        text-decoration:none;
        }
 
        .logo_seperator{ 
            flex : 1;
        }

       .toolbar_navigation-items ul{
           list-style:none;
           margin:0%;
           padding:0%;
           width:100%;
           display:flex;
           flex-direction:row;
           justify-content : space-between;

       }
       
       .toolbar_navigation-items li{
        border:1px solid black;
        transition : 0.3s;
        padding:8px;
       }
       .toolbar_navigation-items li:hover{
           border-color : white;
       }

       .toggle-button{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        height:25px;
        width:30px;
        background:transparent;
        border:none;
        cursor:pointer;
        padding:0;
        margin-left:5px;
        box-sizing: border-box;

       }
      .toggle-button:focus{
        outline:none;
       } 
       .toggle-button__line{
           width:25px;
           height:2px;
           background:white;
       }

       @media (max-width:768px){
        .toolbar_navigation-items{
            display:none;
        }
       }

       @media (min-width : 769px){
           .toolbar__hamburger{
               display:none;
           }
           .toolbar__logo{
               margin-left : 0;
           }
       }





    

    `;

export default Toolbar;