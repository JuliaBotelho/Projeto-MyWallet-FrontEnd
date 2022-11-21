import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FormLog } from "./LoginPage";
import axios from "axios";

import { AuthContext } from "../contextElements/auth";

export default function EntryPage() {
    const [formPlus, setFormPlus] = useState ({description:"",ammount:"", type:"plus"})
    const navigate = useNavigate()

    const{ userData } = useContext(AuthContext)
    const config = { headers: {"Authorization" : `Bearer ${userData.token}`}}

    function handleEntryForm(e){
        const { name,value } = e.target
        setFormPlus({...formPlus, [name]:value})
    }

    function sendEntryData(e){
        e.preventDefault()
        const body = formPlus

        axios.post("http://localhost:5000/mywallet", body, config)
        .then(res=>{
            navigate("/carteira")
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <ContentForm>
            <HeaderForm>Nova entrada</HeaderForm>
            <FormLog onSubmit = {sendEntryData}>
                <input
                    name="ammount"
                    type="text"
                    value={formPlus.ammount}
                    onChange={handleEntryForm}
                    placeholder="Valor"
                    required
                />
                <input
                    name="description"
                    type="text"
                    value={formPlus.description}
                    onChange={handleEntryForm}
                    placeholder="Descrição"
                    required
                />
                <button type="submit">Salvar entrada</button>
            </FormLog>
        </ContentForm>
    )
}

export const ContentForm = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 15px;
`

export const HeaderForm = styled.div`
    width:327px;
    height: 55px;
    margin: 20px 25px;
    font-family: 'Raleway', sans-serif;
    color: #FFFFFF;
    font-size: 27px;
    font-weight:700;

    display:flex;
    flex-direction:column;
    justify-content: flex-start;
`
