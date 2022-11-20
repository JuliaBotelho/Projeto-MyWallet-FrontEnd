import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FormLog, RegisterLink } from "./LoginPage";

export default function RegisterPage() {
    return (
        <ContentRegister>
            <LogoMain>MyWallet</LogoMain>
            <FormLog>
                <input
                    name="name"
                    type="text"
                    placeholder="Nome"
                    required
                />
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
                <input
                    name="password"
                    type="password"
                    placeholder="Confirme a senha"
                    required
                />
                <button>Cadastrar</button>
            </FormLog>
            <RegisterLink>
                Já tem uma conta? Entre agora!
            </RegisterLink>
        </ContentRegister>
    )
}

const ContentRegister = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const LogoMain = styled.h1`
    font-size : 32px;
    font-weight: 400;
    color:#ffffff;
    font-family: 'Saira Stencil One', cursive;

    margin-top: 100px;
    margin-bottom: 28px;
`