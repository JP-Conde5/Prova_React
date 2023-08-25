import styled from "styled-components"
import { colors } from "../../style/GlobalStyle.ts"

export const Section = styled.section`
    display: flex;
    justify-content: center;
   ul{
        display: grid;
        grid-template-columns: auto auto;
        gap: 4rem;
        list-style: none;
        text-align: center;
        width: 93%;
        margin-top: 4rem;
        li{
            background-color: ${colors.Texto};
            border: 2rem solid ${colors.Texto};
            border-radius: 15px;
            font-size: 1rem;
        }
   }
`