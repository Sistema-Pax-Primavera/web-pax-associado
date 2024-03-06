import React, { useState, useEffect } from "react";
import "./associado.css";
import Pesquisar from "../../assets/pesquisar.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import idiomas from "../utils/info";
import { useAssociado } from "../services/api";
import TableComponent from "../components/table/table";
import { headers } from "../entities/headers/header-associado";
import ButtonIcon from "../components/button-icon";

const clientes = [
  {
    id: 1,
    nome: "João Silva",
    cpf: "12345678901",
    contrato: 9876,
    regiao: "BOLETO",
    situacao: 1,
    tipo: "TITULAR",
    ult_pagamento: "10/10/2023",
    dependente: "ADERBAL",
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    cpf: "23456789012",
    contrato: 6543,
    regiao: "COB",
    situacao: 2,
    tipo: "TITULAR",
    ult_pagamento: "15/09/2023",
    dependente: "ADERBAL",
  },
  {
    id: 3,
    nome: "Carlos Santos",
    cpf: "34567890123",
    contrato: 1234,
    regiao: "BOLETO",
    situacao: 3,
    tipo: "TITULAR",
    ult_pagamento: "22/08/2023",
    dependente: "ADERBAL",
  },
  {
    id: 4,
    nome: "Ana Lima",
    cpf: "45678901234",
    contrato: 5678,
    regiao: "COB",
    situacao: 1,
    tipo: "DEPENDENTE",
    ult_pagamento: "05/07/2023",
    dependente: "-",
  },
  {
    id: 5,
    nome: "Rafael Pereira",
    cpf: "56789012345",
    contrato: 4321,
    regiao: "BOLETO",
    situacao: 2,
    tipo: "TITULAR",
    ult_pagamento: "18/06/2023",
    dependente: "-",
  },
  {
    id: 6,
    nome: "Fernanda Costa",
    cpf: "67890123456",
    contrato: 8765,
    regiao: "COB",
    situacao: 3,
    tipo: "TITULAR",
    ult_pagamento: "30/05/2023",
    dependente: "ADERBAL",
  },
  {
    id: 7,
    nome: "Lucas Oliveira",
    cpf: "78901234567",
    contrato: 9876,
    regiao: "BOLETO",
    situacao: 1,
    tipo: "TITULAR",
    ult_pagamento: "12/04/2023",
    dependente: "ADERBAL",
  },
  {
    id: 8,
    nome: "Isabela Rodrigues",
    cpf: "89012345678",
    contrato: 5432,
    regiao: "COB",
    situacao: 2,
    tipo: "TITULAR",
    ult_pagamento: "25/03/2023",
    dependente: " - ",
  },
  {
    id: 9,
    nome: "Gustavo Silva",
    cpf: "90123456789",
    contrato: 1234,
    regiao: "BOLETO",
    situacao: 3,
    tipo: "TITULAR",
    ult_pagamento: "08/02/2023",
    dependente: "ADERBAL",
  },
  {
    id: 10,
    nome: "Amanda Souza",
    cpf: "01234567890",
    contrato: 5678,
    regiao: "COB",
    situacao: 1,
    tipo: "DEPENDENTE",
    ult_pagamento: "20/01/2023",
    dependente: "ADERBAL",
  },
];

function createData(
  id,
  contrato,
  cpf,
  tipo,
  nome,
  regiao,
  ult_pagamento,
  dependente,
  situacao
) {
  return {
    id,
    contrato,
    cpf,
    tipo,
    nome,
    regiao,
    ult_pagamento,
    dependente,
    situacao,
  };
}

const rows = clientes.map((cliente) =>
  createData(
    cliente.id,
    cliente.contrato,
    cliente.cpf,
    cliente.tipo,
    cliente.nome,
    cliente.regiao,
    cliente.ult_pagamento,
    cliente.dependente,
    cliente.situacao
  )
);

const getSituacaoLabel = (situacao) => {
  switch (situacao) {
    case 1:
      return "EM DIA";
    case 2:
      return "EM ATRASO";
    case 3:
      return "CANCELADO";
    default:
      return "";
  }
};

const formatarCPF = (cpf) => {
  // Adapte conforme necessário para o formato desejado
  const parteVisivel = cpf.substring(0, 3); // Primeiros 5 dígitos visíveis
  const parteOculta = ".***.***"; // Parte oculta
  const ultimosDigitos = cpf.substring(9); // Últimos 2 dígitos visíveis
  return `${parteVisivel}${parteOculta}-${ultimosDigitos}`;
};

const Associado = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [showImage, setShowImage] = useState(true);
  const navigate = useNavigate();
  const [idioma, setIdioma] = useState(false);
  const [isIdioma, setIsIdioma] = useState(true);
  const { getAssociados } = useAssociado();

  const handleSearch = () => {
    setLoading(true);
    getAssociados().then((data) => {
      setSearchResult(data);
    });

    if (searchResult != null) {
      setLoading(false);
    }
  };

  const handleOpenButtonClick = (cliente) => {
    setShowImage(true);
    setSearchResult([]);
    setSearchTerm("");
    navigate("/dados-cadastrais", { state: { cliente } });
    localStorage.setItem("page-associado", "/dados-cadastrais");
    // localStorage.setItem('clienteSelecionado', JSON.stringify(cliente));
  };

  useEffect(() => {
    const savedUsuario = localStorage.getItem("usuario");
    if (savedUsuario) {
      const usuarioObj = JSON.parse(savedUsuario);
      setIdioma(usuarioObj.idioma == "BR" ? false : true);
    }
  }, []);

  const verificaIdioma = () => {
    const savedUsuario = localStorage.getItem("usuario");
    if (savedUsuario) {
      const usuarioObj = JSON.parse(savedUsuario);
      setIdioma(usuarioObj.idioma === "BR" ? false : true);
    }

    setIsIdioma(false);
  };

  const TableIdioma = idiomas[idioma ? "es_PY" : "pt_BR"].table;
  const colunas = Object.keys(TableIdioma);

  useEffect(() => {
    const intervalId = setInterval(verificaIdioma, 100);

    // Certificar-se de limpar o intervalo quando o componente for desmontado
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container-associado">
      <div className="pesquisa-associado">
        <input
          placeholder={
            idioma ? idiomas.es_PY.pesquisa.texto : idiomas.pt_BR.pesquisa.texto
          }
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="button-pesquisa-associado">
          <ButtonIcon
            icon={<SearchIcon fontSize={"small"}/>} 
            funcao={()=>handleSearch()}
            />
          
        </div>
      </div>
      <ToastContainer />
      {loading && (
        <div className="loading-associado">
          <Box sx={{ display: "flex" }}>
            <CircularProgress color="success" />
          </Box>
          <p>{idioma ? "Cargando" : "Carregando"}...</p>
        </div>
      )}
      {showImage && !loading && searchResult.length === 0 && (
        <div className="imagem-pesquisar-associado">
          <img src={Pesquisar} alt="Pesquisar" />
        </div>
      )}
      {!loading && searchResult.length > 0 && (
        <div className="tabelas-associados">
          <TableComponent
            headers={headers}
            rows={searchResult}
            actionsLabel={["Ações", "Acciones"]}
            actionCalls={{
              // delete: (e) =>
              //     console.log(e),
              // edit: (e) => console.log('edit'),
              view: (e) => handleOpenButtonClick(e),
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Associado;
