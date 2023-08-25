import styled from "styled-components"
import { colors } from "../../style/GlobalStyle"

export const Div = styled.div`
    h4{
        padding: 1rem;
        text-align: center;
    }
    padding-top: 5rem;
    height: 100%;
    width: 10%;
    margin-left: 90%;
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; 
    border-left: 0.5rem solid ${colors.Titulo};
    ul{
        list-style: none;
    }
    ul li a{
        text-align: center;
        text-decoration: none;
        color:${colors.Branco};
        background-color: ${colors.Menu1};
        border: 1rem solid ${colors.Menu1};
        border-radius: 15px;
    }
    ul li{
        padding:0.5rem;
        border-radius:3px;
        margin:0.5rem;
    }
    @media (max-width: 1000px){
        width: 100px;
    }

`
    

