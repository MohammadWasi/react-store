
import styled from 'styled-components'


export const ButtonContainer = styled.button`
text-transform:capitalise;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lighblue);
border-color: ${props => props.cart ? "var(--mainYellow) ": "var(--lighblue)"};
color: var(--lighblue);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem;
transition: all 0.5s ease-in-out;
&:hover {
    background: var(--lighblue);
    color: var(--mainBlue)
}
&:focus {
    outline: none;
}
`
export default ButtonContainer;