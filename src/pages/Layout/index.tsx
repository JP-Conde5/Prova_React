import { Outlet } from "react-router-dom"
import { ComponentHeader, ComponentBar } from "../../components/index.ts"
import * as S from "./style.ts"

export function Layout(){
    return(
        <>
            <ComponentHeader />
            <ComponentBar />
            <S.Main>
                <Outlet />
            </S.Main>
        </>
    )        
}