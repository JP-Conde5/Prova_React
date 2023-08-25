import styled from "styled-components"
import { colors } from "../../style/GlobalStyle"

export const Section = styled.section`
    display: flex;
    justify-content: center;
    article{
        margin-top: 4rem;
        width: 93%;
        p{
            background-color: ${colors.Texto};
            border: 1rem solid ${colors.Texto};
            border-radius: 20px;
        }
    }
    
`