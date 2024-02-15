import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './header.css';

const Header = ({ cliente }) => {
    const [activeRoute, setActiveRoute] = useState("");
    const navigate = useNavigate();

    const handleMenuClick = (route) => {
        // Navegar para a rota específica
        console.log(cliente)
        navigate(route, { state: { cliente } });
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
            <label>Cliente</label>
            <button
                onClick={() => handleMenuClick("/dados-cadastrais")}
                className={activeRoute === "/dados-cadastrais" ? "active" : ""}
            >
                Dados Cadastrais
            </button>
            <button onClick={() => handleMenuClick("/dados-cobranca")}
                className={activeRoute === "/dados-cobranca" ? "active" : ""}>Dados Cobrança</button>
            <button
                onClick={() => handleMenuClick("/dependentes")}
                className={activeRoute === "/dependentes" ? "active" : ""}
            >Dependentes
            </button>
            <button
                onClick={() => handleMenuClick("/pdr")}
                className={activeRoute === "/pdr" ? "active" : ""}
            >PDR
            </button>
            <button
                onClick={() => handleMenuClick("/contato")}
                className={activeRoute === "/contato" ? "active" : ""}
            >Contato
            </button>
            <label>Ações</label>
            <button
                onClick={() => handleMenuClick("/recebimento")}
                className={activeRoute === "/recebimento" ? "active" : ""}
            >Recebimento
            </button>
            <button
                onClick={() => handleMenuClick("/inativar-contrato")}
                className={activeRoute === "/inativar-contrato" ? "active" : ""}
            >Inativar Contrato
            </button>
            <button
                onClick={() => handleMenuClick("/registrar-obito")}
                className={activeRoute === "/registrar-obito" ? "active" : ""}
            >Registrar Obito
            </button>
            <button
                onClick={() => handleMenuClick("/cancelar-contrato")}
                className={activeRoute === "/cancelar-contrato" ? "active" : ""}
            >Cancelar Contrato
            </button>
            <button
                onClick={() => handleMenuClick("/quitar")}
                className={activeRoute === "/quitar" ? "active" : ""}
            >Quitar
            </button>
            <button
                onClick={() => handleMenuClick("/extrato")}
                className={activeRoute === "/extrato" ? "active" : ""}
            >Extrato
            </button>
            <button
                onClick={() => handleMenuClick("/negociar")}
                className={activeRoute === "/negociar" ? "active" : ""}
            >Negociação
            </button>
            <button
                onClick={() => handleMenuClick("/contrato")}
                className={activeRoute === "/contrato" ? "active" : ""}
            >Contratos
            </button>
            <button
                onClick={() => handleMenuClick("/carteirinha")}
                className={activeRoute === "/carteirinha" ? "active" : ""}
            >Carteirinhas
            </button>
            <label>Histórico do Cliente</label>
            <button
                onClick={() => handleMenuClick("/observacao")}
                className={activeRoute === "/observacao" ? "active" : ""}
            >Observações
            </button>
            <button
                onClick={() => handleMenuClick("/historico-funeraria")}
                className={activeRoute === "/historico-funeraria" ? "active" : ""}
            >Histórico Funerário
            </button>
            <button
                onClick={() => handleMenuClick("/historico-pet")}
                className={activeRoute === "/historico-pet" ? "active" : ""}
            >Histórico PET
            </button>
            <button
                onClick={() => handleMenuClick("/historico-clinica")}
                className={activeRoute === "/historico-clinica" ? "active" : ""}
            >Histórico Clínica
            </button>
        </div>
    );
};

export default Header;
