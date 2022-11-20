import styled from "styled-components";
import { FormLog } from "./LoginPage";

export default function EntryPage() {
    return (
        <ContentForm>
            <HeaderForm>Nova entrada</HeaderForm>
            <FormLog>
                <input
                    name="amount"
                    type="number"
                    placeholder="Valor"
                    required
                />
                <input
                    name="description"
                    type="text"
                    placeholder="Descrição"
                    required
                />
                <button>Salvar entrada</button>
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
