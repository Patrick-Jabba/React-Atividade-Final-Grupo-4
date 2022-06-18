import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./components/App";
import DefaultPage from "./components/DefaultPage";
import { AlunoProvider, TemaProvider, UsuarioProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AlunoProvider>
      <UsuarioProvider>
        <TemaProvider>
          {/* 
          DefaultPage
          É só uma div, que pega o tema, pra incluir no fundo da página
        */}
          <DefaultPage>
            <BrowserRouter>
              {/* 
              Navbar => possui o botão de escolha do tema
            */}
              <Navbar />
              <App />
            </BrowserRouter>
          </DefaultPage>
        </TemaProvider>
      </UsuarioProvider>
    </AlunoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
