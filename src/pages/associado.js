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

const Associado = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [showImage, setShowImage] = useState(true);
  const navigate = useNavigate();
  const [idioma, setIdioma] = useState(false);
  const [isIdioma, setIsIdioma] = useState(true);
  const { getAssociados } = useAssociado();

  const handleSearch = () => {
    setLoading(true);
    if (!searchTerm) {
      getAssociados().then((data) => {
        setSearchResult(data);
      });
      setLoading(false);
    } else {
      const filteredClients = clientes.filter(
        (item) =>
          item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.n_contrato.toString().includes(searchTerm) ||
          item.cpf.includes(searchTerm)
      );

      setSearchResult(filteredClients);
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
    getAssociados().then((data) => {
      setClientes(data);
    });
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
            icon={<SearchIcon fontSize={"small"} />}
            funcao={() => handleSearch()}
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
