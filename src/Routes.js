import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Associado from "./pages/associado";
import DadosCadastrais from "./pages/dados-cadastrais";
import Dependentes from "./pages/dependentes";
import DadosCobranca from "./pages/dados-cobranca";

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/associado">
        <Routes>
            <Route exact path="*" element={<Associado />} />
            <Route exact path="/dados-cadastrais" element={<DadosCadastrais />} />
            <Route exact path="/dados-cobranca" element={<DadosCobranca />} />
            <Route exact path="/dependentes" element={<Dependentes />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;