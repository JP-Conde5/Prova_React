import styled from "styled-components"
import { colors } from "../../style/GlobalStyle"

export const Header = styled.header`
   background-color: ${colors.Titulo};
   height: 6rem;
   margin-right: 12%;
   display: flex;
   align-items: center;
   h1{
        margin-left: 2rem;
        color: ${colors.Branco}
   }
`