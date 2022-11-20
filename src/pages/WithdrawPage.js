import styled from "styled-components";
import { HeaderForm, ContentForm } from "./EntryPage";
import { FormLog } from "./LoginPage";

export default function WithdrawPage() {
    return (
        <ContentForm>
            <HeaderForm>Nova saída</HeaderForm>
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
                <button>Salvar saída</button>
            </FormLog>
        </ContentForm>
    )
}