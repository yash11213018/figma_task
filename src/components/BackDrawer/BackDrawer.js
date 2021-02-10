import styled from 'styled-components';

const BackDrawer = props => {
    return (
        <Wrapper>
    <div 
    className = 'backDrawer'
    onClick = {props.click}
     />
    </Wrapper>)

}
const Wrapper = styled.div`
    .backDrawer{
    position : fixed;
    height:100%;
    background:  rgba(0,0,0,0.3);
    top:0;
    left:0;
    width:100%;
    z-index : 100;
    }
    `;

export default BackDrawer;