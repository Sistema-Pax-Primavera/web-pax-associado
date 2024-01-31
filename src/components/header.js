import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './header.css';

const Header = () => {
    const [activeRoute, setActiveRoute] = useState("");
    const navigate = useNavigate();

    const handleMenuClick = (route) => {
        // Navegar para a rota específica
        navigate(route);
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
            >Dependentes</button>
            <button>PDR</button>
            <label>Ações</label>
            <button>Inativar Contrato</button>
            <button>Contato</button>
            <button>Contratos</button>
            <button>Carteirinhas</button>
            <label>Histórico do Cliente</label>
            <button>Observações</button>
            <button>Histórico Funerário</button>
            <button>Histórico PET</button>
            <button>Histórico Clínica</button>
        </div>
    );
};

export default Header;
