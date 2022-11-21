import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../contextElements/auth";

export default function WalletPage() {
    const {userData} = useContext(AuthContext)

    return (
        <ContentWallet>
            <WalletHeader>
                <h1>Olá {userData.name}</h1>
                <ion-icon name="exit-outline"></ion-icon>
            </WalletHeader>
            <ExtractContent>
                <ExtractMinus>
                    <DataDesc>
                        <h2>30/11</h2>
                        <h3>Almoço da mãe</h3>
                    </DataDesc>
                    <h4>39,90</h4>
                </ExtractMinus>
                <ExtractPlus>
                    <DataDesc>
                        <h2>30/11</h2>
                        <h3>Almoço da mãe</h3>
                    </DataDesc>
                    <h4>39,90</h4>
                </ExtractPlus>
                <h1>SALDO</h1>
                <h5>251658</h5>
            </ExtractContent>
            <ButtonsContainer>
                <Link to = {"/entrada"}>
                    <button>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        Nova entrada
                    </button>
                </Link>
                <Link to = {"/saida"}>
                    <button>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        Nova saída
                    </button>
                </Link>
            </ButtonsContainer>
        </ContentWallet>
    )
}

const ContentWallet = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 15px;
`

const WalletHeader = styled.div`
    height:80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h1{
        font-family: 'Raleway', sans-serif;
        color: #FFFFFF;
        font-size: 27px;
        font-weight:700;
    }
    ion-icon{
        color: #FFFFFF;
        font-size: 26px; 
    }
`

const ExtractContent = styled.div`
    height:446px;
    width: 326px;
    padding-top: 15px;
    padding-left: 6px;
    padding-right: 6px;
    padding-bottom: 20px;
    background-color:#FFFFFF;
    border-radius:5px;
    margin-bottom:14px;
    position: relative;
    h1{
        position: absolute;
        bottom: 5px;
        left: 5px;

        font-family: 'Raleway', sans-serif;
        color: #000000;
        font-size: 17px;
        font-weight:700;
    }
    h5{
        position: absolute;
        bottom: 6px;
        right: 5px;

        font-family: 'Raleway', sans-serif;
        color: #A328D6;
        font-size: 17px;
        font-weight:400;
    }
`
const ExtractNoContent = styled.div`
    height:442px;
    display:flex;
    padding : 50px;
    justify-content:center;
    align-items:center;
    font-family: 'Raleway', sans-serif;
    color: #868686;
    font-size: 20px;
    font-weight:400;
`
const DataDesc = styled.div`
    display:flex;
    align-items:center;
`

const ExtractMinus = styled.div`
    display: flex;
    height:19px;
    padding: 12px;
    align-items:center;
    justify-content: space-between;
    h2{
        font-family: 'Raleway', sans-serif;
        color: #c6c6c6;
        font-size: 16px;
        font-weight:400;
        margin-right:9px;
    }
    h3{
        font-family: 'Raleway', sans-serif;
        color: #000000;
        font-size: 16px;
        font-weight:400;
    }
    h4{
        font-family: 'Raleway', sans-serif;
        color: #c70000;
        font-size: 16px;
        font-weight:400;
    }
`

const ExtractPlus = styled.div`
  display: flex;
  height:19px;
  padding: 12px;
  align-items:center;
  justify-content: space-between;
    h2{
        font-family: 'Raleway', sans-serif;
        color: #c6c6c6;
        font-size: 16px;
        font-weight:400;
        margin-right: 9px;
    }
    h3{
        font-family: 'Raleway', sans-serif;
        color: #000000;
        font-size: 16px;
        font-weight:400;
    }
    h4{
        font-family: 'Raleway', sans-serif;
        color: #03ac00;
        font-size: 16px;
        font-weight:400;
    }
`

const ButtonsContainer = styled.div`
    display:flex;
    padding-left:10px;
    button{
        width:155px;
        height: 114px;
        padding: 10px;
        display: flex;
        margin-right:10px;
        border-radius: 5px;
        flex-direction:column;
        justify-content: space-between;
        align-items:flex-start;
        font-family: 'Raleway', sans-serif;
        color: #FFFFFF;
        font-size: 17px;
        font-weight:700;
        background-color:#A328D6;
        border: 1px solid #A328D6;
        :hover{
            background-color: #ae30e3;
        }
    }
    ion-icon{
        font-size: 24px;
    }
    a{
        text-decoration:none;
    }
`