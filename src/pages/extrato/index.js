import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router-dom";
import "./extrato.css";
import ButtonText from "../../components/button-texto";
import { headerExtrato } from "../../entities/headers/header-extrato";
import TableComponent from "../../components/table/table";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { converterDataHora, formatarValor } from '../../utils/fuctions';


const Extrato = () => {
  const location = useLocation();
  const cliente = location.state && location.state.cliente;
  const idioma = location.state && location.state.idioma;
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedParcela, setSelectedParcela] = useState({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [extratoData, setExtratoData] = useState([]); // Dados originais do extrato
  const [filteredExtrato, setFilteredExtrato] = useState([]);

  useEffect(() => {
    const savedUsuario = localStorage.getItem("usuario");
    if (savedUsuario) {
      const usuarioObj = JSON.parse(savedUsuario);
      setUser(usuarioObj.usuario);
    }

    // Atualizar os dados do extrato
    if (cliente && cliente.extrato) {
      setExtratoData(cliente.extrato);
      setFilteredExtrato(cliente.extrato); // Inicialmente, os dados filtrados serão os dados originais
    }
  }, [cliente]);

  const handleOpenModalParcela = (parcela) => {
    setSelectedParcela(parcela);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedParcela(null);
    setIsModalOpen(false);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleFiltrar = () => {
    const filteredData = extratoData.filter((extrato) => {
      const extratoDate = new Date(extrato.data_hora_pagamento); // Aqui é onde você está tentando acessar a data_hora_pagamento
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);
      // Verificando se a data do extrato está dentro do intervalo selecionado pelo usuário
      return extratoDate >= startDateObj && extratoDate <= endDateObj;
    });
  
    if (filteredData.length === 0) {
      toast.warning('Nenhum resultado encontrado.');
    }
  
    setFilteredExtrato(filteredData);
  };
  

  useEffect(() => {
    const savedUsuario = localStorage.getItem("usuario");
    if (savedUsuario) {
      const usuarioObj = JSON.parse(savedUsuario);
      setUser(usuarioObj.usuario);
    }
  }, []);


  return (
    <div className="container-associados">
      <Header cliente={cliente} idioma={idioma} />
      <div className="dados-cobranca-associado">
        <div className="fundo-cobranca">
          <div className="icones-nome">
            <label>
              <AccountCircleIcon fontSize={"small"} />
              {cliente ? cliente.nome : ""} Nº do Contrato -{" "}
              {cliente ? cliente.n_contrato : ""}
            </label>
          </div>
          <div>
            <div>
              <div className="container-linha">
                <div className="campos-02">
                  <label>De</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                  ></input>
                </div>
                <div className="campos-02">
                  <label>Até</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                  ></input>
                </div>
                <div className="filtro-extrato">
                  <ButtonText title="FILTRAR" funcao={handleFiltrar} />
                </div>
              </div>
            </div>
          </div>
          <div className="container-linha">
          <TableComponent
              headers={headerExtrato}
              rows={filteredExtrato}
              actionsLabel={["Ações", "Acciones"]}
              actionCalls={{
                view: (e) => handleOpenModalParcela(e),
              }}
            />
            <div className="imprimir-anual-extrato">
              <ButtonText title="IMPRIMIR ANUAL" />
            </div>
          </div>
        </div>
        {isModalOpen && selectedParcela && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h2>PAX PRIMAVERA</h2>
                <h3>CNPJ 00.000.000/0000-00</h3>
                <h3>REIMPRESSÃO</h3>
                <p>Data: {selectedParcela.data_hora_pagamento}</p>
                <p>Usuario: {user}</p>
              </div>
              <table className="cupom-fiscal">
                <thead>
                  <tr>
                    <th>Parcela</th>
                    <th>Forma Pagamento</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedParcela &&
                    selectedParcela.parcelas.map((item) => (
                      <tr key={item.id}>
                        <td>{item.data_vencimento}</td>
                        <td>{item.forma_pagamento}</td>
                        <td>{item.valor_parcela}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <p>
                Total de Parcelas: {selectedParcela.parcelas.length} | Total:{" "}
                {selectedParcela.valor_total}
              </p>
              <p>
                Contrato: {cliente.n_contrato} Região: {cliente.regiao}
              </p>
              <p>{cliente.nome} </p>
              <p>
                {cliente.rua_residencial} QD{cliente.quadra_residencial} LT
                {cliente.lote_residencial} Nº{cliente.numero_residencial} -{" "}
                {cliente.bairro_residencial} - {cliente.municipio_residencial}
              </p>
              <p>
                BAIXE NOSSO APLICATIVO PAX PRIMAVERA E CONFIRA NOSSAS PROMOÇÕES!
              </p>
              <p>INFORMAÇÕES (67) 9 9680-8200</p>
              <div className="imprimir-button-container">
                <button
                  className="imprimir-button"
                  onClick={() => window.print()}
                >
                  Imprimir
                </button>
              </div>
              <button className="fechar-modal" onClick={handleCloseModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Extrato;
