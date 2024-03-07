import React, { useState } from "react";
import Header from "../../components/header/header";
import DateMaskInput from "../../components/inputs";
import "./observacao.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router-dom";
import MyAccordion from "../../components/accordion";
import TaskIcon from "@mui/icons-material/Task";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { headerObservacao } from "../../entities/headers/header-observacao";
import TableComponent from "../../components/table/table";
import ButtonText from "../../components/button-texto";
import ModalAssociado from "../../components/modal-associado";
import DescriptionIcon from "@mui/icons-material/Description";

function createData(name, data, usuario) {
  return { name, data, usuario };
}

const Observacao = () => {
  const location = useLocation();
  const cliente = location.state && location.state.cliente;
  const idioma = location.state && location.state.idioma;
  const [modalAberta, setModalAberta] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dadosModal, setDadosModal] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [formData, setFormData] = useState({
    assunto: "",
    data: "",
    cliente: "",
    categoria: "",
    subcategoria: "",
    descricao: "",
  });

  const [rows, setRows] = useState([
    createData("Teste", "15/01/2023", "Vanderlei"),
  ]);

  const handleViewClick = (rowData) => {
    //const formattedDate = new Date(rowData.data).toLocaleDateString();
    setDadosModal({
      assunto: rowData.titulo,
      data: rowData.data_criacao, // Utilize a data formatada
      categoria: rowData.categoria,
      subcategoria: rowData.subcategoria,
      cliente: rowData.usuario,
      descricao: rowData.descricao,
    });
    setIsOpen(true); // Abrir a modal quando o usuário clicar para visualizar
  };

  const handleSaveClick = () => {
    const updatedRows = rows.map((row) => {
      if (row.name === formData.assunto) {
        return {
          ...row,
          data: formData.data,
          usuario: formData.cliente,
        };
      }
      return row;
    });
    setRows(updatedRows);
    // Limpar os campos do formulário após salvar
    setFormData({
      assunto: "",
      data: "",
      cliente: "",
      categoria: "",
      subcategoria: "",
      informacoes: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container-associados">
        <Header cliente={cliente} idioma={idioma} />
        <div className="container-observacao-associado">
          <div className="icones-nome">
            <label>
              <AccountCircleIcon fontSize={"small"} />
              {cliente ? cliente.nome : ""} Nº do Contrato -{" "}
              {cliente ? cliente.n_contrato : ""}
            </label>
          </div>
          <div className="container-linha">
            <div className="campos-01">
              <label>Assunto</label>
              <input
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
              ></input>
            </div>
            <div className="data-observacao">
              <label>Data</label>
              <DateMaskInput
                name="data"
                value={formData.data}
                onChange={handleChange}
              />
            </div>
            <div className="campos-01">
              <label>Cliente</label>
              <input
                name="cliente"
                value={formData.cliente}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="container-linha">
            <div className="textarea">
              <label>Informações</label>
              <textarea
                name="informacoes"
                value={formData.informacoes}
                onChange={handleChange}
                placeholder="Escreva seu texto aqui"
                wrap="soft"
              ></textarea>
            </div>
          </div>
          <div className="salva-observacao">
            <ButtonText title="SALVAR" funcao={handleSaveClick} />
          </div>
          <div className="container-linha2">
            
          </div>
          {isOpen && dadosModal && (
            <ModalAssociado
              isOpen={isOpen}
              onClose={() => setIsOpen(false)} // Aqui você define a função onClose que fecha o modal
              buttonText="Abrir Modal"
              titulo="Observação"
              icon="ícone_do_botão"
              icone2={<DescriptionIcon fontSize={"small"} />}
            >
              <div className="fundo-modal-observacao">
                <div className="container-linha">
                  <div className="titulo-observacao2">
                    <p>Título</p>
                    <label>{dadosModal.assunto}</label>
                  </div>
                  <div className="titulo-observacao3">
                    <p>Usuário </p>
                    <label>{dadosModal.cliente}</label>
                  </div>
                  <div className="titulo-observacao">
                    <p>Categoria </p>
                    <label>{dadosModal.categoria}</label>
                  </div>
                </div>
                <div className="container-linha">
                  <div className="titulo-observacao3">
                    <p>Sub Categoria </p>
                    <label>{dadosModal.subcategoria}</label>
                  </div>
                  <div className="titulo-observacao3">
                    <p>Data </p>
                    <label>{dadosModal.data}</label>
                  </div>
                </div>
                <div className="container-linha">
                  <div className="descricao-observacao3">
                    <p>Descrição </p>
                    <label>{dadosModal.descricao}</label>
                  </div>
                </div>
              </div>
            </ModalAssociado>
          )}
          <MyAccordion
              title="Historico de F9"
              icon={<TaskIcon />}
              expandedIcon={<ExpandMoreIcon />}
            >
              <TableComponent
                headers={headerObservacao}
                rows={cliente.observacao}
                actionsLabel={["Ações", "Acciones"]}
                actionCalls={{
                  view: (e) => handleViewClick(e),
                }}
              />
            </MyAccordion>
        </div>
        
      </div>
    </>
  );
};

export default Observacao;
