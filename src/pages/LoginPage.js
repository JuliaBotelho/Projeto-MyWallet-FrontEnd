import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";

export default function LoginPage(){
    return(
        <ContentLogin>
            <LogoMain>MyWallet</LogoMain>
            <FormLog>
                <input
                name="email"
                type="email"
                placeholder="E-mail"
                required
                />
                <input
                name="password"
                type="password"
                placeholder="Senha"
                required
                />
                <button>Entrar</button>
            </FormLog>
            <RegisterLink>
                Primeira vez? Cadastre-se!
            </RegisterLink>
        </ContentLogin>
    )
}

const ContentLogin = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const LogoMain = styled.h1`
    font-size : 32px;
    font-weight: 400;
    color:#ffffff;
    font-family: 'Saira Stencil One', cursive;

    margin-top: 155px;
    margin-bottom: 28px;
`
export const FormLog = styled.form`
    display:flex;
    flex-direction:column;
    input{
        width:326px;
        height:58px;
        padding-left: 7px;
        margin-bottom: 12px;
        border-radius:5px;

        background-color:#FFFFFF;
        border: 1px solid #FFFFFF;

        font-family: 'Raleway', sans-serif;
        color: #000000;
        font-size: 20px;
        font-weight:400;
    }
    button{
        display:flex;
        justify-content:center;
        align-items:center;

        width:326px;
        height:52px;
        border-radius: 5px;

        background-color:#A328D6;
        border: 1px solid #A328D6;

        font-family: 'Raleway', sans-serif;
        color: #FFFFFF;
        font-size: 20px;
        font-weight:700;
        :hover{
            background-color: #ae30e3;
        }
    }
`

export const RegisterLink = styled.h2`
    margin-top: 35px;

    font-size: 15px;
    font-weight:700px;
    font-family: 'Raleway', sans-serif;
    color:#FFFFFF;
`