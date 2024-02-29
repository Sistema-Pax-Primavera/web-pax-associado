import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './header.css';
import idiomas from '../../utils/info';

const Header = ({ cliente, idioma }) => {
    const [activeRoute, setActiveRoute] = useState("");
    const navigate = useNavigate();
    const [isIdioma, setIsIdioma] = useState(true);

    const handleMenuClick = (route) => {
        // Navegar para a rota específica
        navigate(route, { state: { cliente, idioma } });
        // Salvar a rota no localStorage
        localStorage.setItem("page-associado", route);
        // Atualizar a rota ativa
        setActiveRoute(route);
    };


    useEffect(() => {
        const savedPage = localStorage.getItem("page-associado");
        setActiveRoute(savedPage);
    }, []);

    return (
        <div className='navegacao-associado'>
            <label>{idioma ? idiomas.es_PY.header.cliente.titulo : idiomas.pt_BR.header.cliente.titulo}</label>
            <button
                onClick={() => handleMenuClick("/dados-cadastrais")}
                className={activeRoute === "/dados-cadastrais" ? "active" : ""}
            >
                {idioma ? idiomas.es_PY.header.cliente.dadosCadastrais : idiomas.pt_BR.header.cliente.dadosCadastrais}
            </button>
            <button onClick={() => handleMenuClick("/dados-cobranca")}
                className={activeRoute === "/dados-cobranca" ? "active" : ""}>
                {idioma ? idiomas.es_PY.header.cliente.dadosCobranca : idiomas.pt_BR.header.cliente.dadosCobranca}
            </button>
            <button
                onClick={() => handleMenuClick("/dependentes")}
                className={activeRoute === "/dependentes" ? "active" : ""}>
                {idioma ? idiomas.es_PY.header.cliente.dependentes : idiomas.pt_BR.header.cliente.dependentes}
            </button>
            <button
                onClick={() => handleMenuClick("/pdr")}
                className={activeRoute === "/pdr" ? "active" : ""}>
                {idioma ? idiomas.es_PY.header.cliente.pdr : idiomas.pt_BR.header.cliente.pdr}
            </button>
            <button
                onClick={() => handleMenuClick("/contato")}
                className={activeRoute === "/contato" ? "active" : ""}>
                {idioma ? idiomas.es_PY.header.cliente.contato : idiomas.pt_BR.header.cliente.contato}
            </button>
            <label>{idioma ? idiomas.es_PY.header.acoes.titulo : idiomas.pt_BR.header.acoes.titulo}</label>
            <button
                onClick={() => handleMenuClick("/recebimento")}
                className={activeRoute === "/recebimento" ? "active" : ""}>
                {idioma ? idiomas.es_PY.header.acoes.recebimento : idiomas.pt_BR.header.acoes.recebimento}
            </button>
            <button
                onClick={() => handleMenuClick("/inativar-contrato")}
                className={activeRoute === "/inativar-contrato" ? "active" : ""}>
                {idioma ? idiomas.es_PY.header.acoes.inativarContrato : idiomas.pt_BR.header.acoes.inativarContrato}
            </button>
            <button
                onClick={() => handleMenuClick("/registrar-obito")}
                className={activeRoute === "/registrar-obito" ? "active" : ""}>
                {idioma ? idiomas.es_PY.header.acoes.registrarObito : idiomas.pt_BR.header.acoes.registrarObito}
            </button>
            <button
                onClick={() => handleMenuClick("/cancelar-contrato")}
                className={activeRoute === "/cancelar-contrato" ? "active" : ""}>
                {idioma ? idiomas.es_PY.header.acoes.cancelarContrato : idiomas.pt_BR.header.acoes.cancelarContrato}
            </button>
            <button
                onClick={() => handleMenuClick("/quitar")}
                className={activeRoute === "/quitar" ? "active" : ""}
            >
                {idioma ? idiomas.es_PY.header.acoes.quitar : idiomas.pt_BR.header.acoes.quitar}
            </button>
            <button
                onClick={() => handleMenuClick("/extrato")}
                className={activeRoute === "/extrato" ? "active" : ""}
            >
                {idioma ? idiomas.es_PY.header.acoes.extrato : idiomas.pt_BR.header.acoes.extrato}
            </button>
            <button
                onClick={() => handleMenuClick("/negociar")}
                className={activeRoute === "/negociar" ? "active" : ""}
            >
                {idioma ? idiomas.es_PY.header.acoes.negociar : idiomas.pt_BR.header.acoes.negociar}
            </button>
            <button
                onClick={() => handleMenuClick("/contrato")}
                className={activeRoute === "/contrato" ? "active" : ""}
            >
                {idioma ? idiomas.es_PY.header.acoes.contrato : idiomas.pt_BR.header.acoes.contrato}
            </button>
            <button
                onClick={() => handleMenuClick("/carteirinha")}
                className={activeRoute === "/carteirinha" ? "active" : ""}
            >
                {idioma ? idiomas.es_PY.header.acoes.carteirinha : idiomas.pt_BR.header.acoes.carteirinha}
            </button>
            <label>{idioma ? idiomas.es_PY.header.historico.titulo : idiomas.pt_BR.header.historico.titulo}</label>
            <button
                onClick={() => handleMenuClick("/observacao")}
                className={activeRoute === "/observacao" ? "active" : ""}
            >
                {idioma ? idiomas.es_PY.header.historico.observacao : idiomas.pt_BR.header.historico.observacao}
            </button>
            <button
                onClick={() => handleMenuClick("/historico-funeraria")}
                className={activeRoute === "/historico-funeraria" ? "active" : ""}
            >
                {idioma ? idiomas.es_PY.header.historico.historicoFunerario : idiomas.pt_BR.header.historico.historicoFunerario}
            </button>
            <button
                onClick={() => handleMenuClick("/historico-pet")}
                className={activeRoute === "/historico-pet" ? "active" : ""}
            >
                {idioma ? idiomas.es_PY.header.historico.historicoPET : idiomas.pt_BR.header.historico.historicoPET}
            </button>
            <button
                onClick={() => handleMenuClick("/historico-clinica")}
                className={activeRoute === "/historico-clinica" ? "active" : ""}
            >
                {idioma ? idiomas.es_PY.header.historico.historicoClinica : idiomas.pt_BR.header.historico.historicoClinica}
            </button>
        </div>
    );
};

export default Header;
