import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FormLog, RegisterLink } from "./LoginPage";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
    const [formRegister, setFormRegister] = useState({name:"", email:"", password:"", confirmpassword:""})
    const navigate = useNavigate()

    function handleRegisterForm(e){
        const {name, value} = e.target
        setFormRegister({...formRegister,[name]:value})
    }

    function sendRegisterData(e){
        e.preventDefault()

        const body = formRegister

        axios.post("http://localhost:5000/sign-up", body)
            .then(res =>{
                navigate("/")
            })
            .catch(err => {
                console.log(err)
                alert("Algo deu errado! Por Favor tente novamente!")
            })
    }

    return (
        <ContentRegister>
            <LogoMain>MyWallet</LogoMain>
            <FormLog onSubmit = {sendRegisterData}>
                <input
                    name="name"
                    type="text"
                    value={formRegister.name}
                    onChange={handleRegisterForm}
                    placeholder="Nome"
                    required
                />
                <input
                    name="email"
                    type="email"
                    value={formRegister.email}
                    onChange={handleRegisterForm}
                    placeholder="E-mail"
                    required
                />
                <input
                    name="password"
                    type="password"
                    value={formRegister.password}
                    onChange={handleRegisterForm}
                    placeholder="Senha"
                    required
                />
                <input
                    name="confirmpassword"
                    type="password"
                    value={formRegister.confirmpassword}
                    onChange={handleRegisterForm}
                    placeholder="Confirme a senha"
                    required
                />
                <button type="submit" >Cadastrar</button>
            </FormLog>
            <Link to = {"/"}>
            <RegisterLink>Já tem uma conta? Entre agora!</RegisterLink>
            </Link>
        </ContentRegister>
    )
}

const ContentRegister = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    a{
        text-decoration:none;
    }
`
export const LogoMain = styled.h1`
    font-size : 32px;
    font-weight: 400;
    color:#ffffff;
    font-family: 'Saira Stencil One', cursive;

    margin-top: 100px;
    margin-bottom: 28px;
`