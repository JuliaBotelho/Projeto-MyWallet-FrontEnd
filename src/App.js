import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WalletPage from "./pages/WalletPage";
import EntryPage from "./pages/EntryPage";
import WithdrawPage from "./pages/WithdrawPage";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path = "/" element ={<WithdrawPage/>}/>
{/*       <Route path = "/cadastro" element ={<RegisterPage/>}/>
      <Route path = "/carteira" element ={<WalletPage/>}/>
      <Route path = "/entrada" element ={<EntryPage/>}/>
      <Route path = "/saida" element ={<OutputPage/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
