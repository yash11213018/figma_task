import {SideDrawerData} from './SideDrawerData';
import styled from 'styled-components';

const SideDrawer = props => {
    
    const Wrapper = styled.nav`
      .side-drawer{
          height:100%;
          background:white;
          box-shadow : 2px 0px 5px rgba(0,0,0,0.5);
          position:fixed;
          top:0;
          left:0;
          width:70%;
          max-width:400px;
          z-index: 200;
      }
      .side-drawer ul{
          
      }
    `;

    
    return (
        <Wrapper>
         <nav className="side-drawer">
           <ul >
            {SideDrawerData.map((item , key) => (
            <li className="side-drawer-list" key={key}>
                <a href = {item.link}> {item.icon} {item.title}</a>
            </li>
            ))
            }
           </ul>
       </nav>
     </Wrapper>
)};

export default SideDrawer;