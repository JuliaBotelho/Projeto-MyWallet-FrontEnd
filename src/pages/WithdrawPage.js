import styled from "styled-components";
import { HeaderForm, ContentForm } from "./EntryPage";
import { FormLog } from "./LoginPage";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../contextElements/auth";

export default function WithdrawPage() {
    const [formMinus, setFormMinus] = useState ({description:"",ammount:"", type:"minus"})
    const navigate = useNavigate()

    const{ userData, setRender, render } = useContext(AuthContext)
    const config = { headers: {"Authorization" : `Bearer ${userData.token}`}}

    function handleWithdrawForm(e){
        const { name,value } = e.target
        setFormMinus({...formMinus, [name]:value})
    }

    function sendWithdrawData(e){
        e.preventDefault()
        const body = formMinus

        axios.post("http://localhost:5000/mywallet", body, config)
        .then(res=>{
            navigate("/carteira")
            setRender(!render)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <ContentForm>
            <HeaderForm>Nova saída</HeaderForm>
            <FormLog onSubmit = {sendWithdrawData}>
                <input
                    name="ammount"
                    type="text"
                    value={formMinus.ammount}
                    onChange={handleWithdrawForm}
                    placeholder="Valor"
                    required
                />
                <input
                    name="description"
                    type="text"
                    value={formMinus.description}
                    onChange={handleWithdrawForm}
                    placeholder="Descrição"
                    required
                />
                <button type="submit">Salvar saída</button>
            </FormLog>
        </ContentForm>
    )
}