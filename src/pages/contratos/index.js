import React, { useState } from 'react';
import Header from '../../components/header/header';
import './contratos.css';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskIcon from '@mui/icons-material/Task';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const Contrato = () => {
  const [arquivos, setArquivos] = useState([]);
  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
  const [arquivoVisualizado, setArquivoVisualizado] = useState(null);

  const handleProcurarChange = (event) => {
    setArquivoSelecionado(event.target.files[0]);
  };

  const handleAnexarClick = () => {
    if (arquivoSelecionado) {
      setArquivos([...arquivos, arquivoSelecionado]);
      setArquivoSelecionado(null); // Limpar o arquivo selecionado após anexar
    }
  };

  const handleExcluirClick = (index) => {
    const novosArquivos = [...arquivos];
    novosArquivos.splice(index, 1);
    setArquivos(novosArquivos);
  };

  const handleVisualizarClick = (arquivo) => {
    setArquivoVisualizado(arquivo);
  };

  return (
    <>
      <div className='container-associados'>
        <Header />
        <div className='container-contato-associado'>
          <div className='icones-nome'>
            <label>
              <AssignmentIcon fontSize={'small'} />Carlos Henrique Nº do Contrato - 789776
            </label>
          </div>
          <div className='container-contratos'>
            <div className='tipo-contrato-associado'>
              <div className='contrato-associados'>
                <label>Adicionar</label>
                <div className='document'>
                  <a>
                    <PostAddIcon fontSize={'large'} />
                  </a>
                  <input type="file" onChange={handleProcurarChange} />
                  <button onClick={handleAnexarClick}>ANEXAR</button>
                </div>
              </div>

              <div className='document'>
                {arquivos.map((arquivo, index) => (
                  <div key={index}>
                    <div className='contrato-associados'>
                      <TaskIcon />
                      <label> {arquivo.name}</label>
                      <button onClick={() => handleExcluirClick(index)}>Excluir</button>
                      <button onClick={() => handleVisualizarClick(arquivo)}>VISUALIZAR</button>
                    </div>
                  </div>
                ))}
              </div>

              {arquivoVisualizado && (
                <div className='visualizador-pdf'>
                  <Document file={arquivoVisualizado}>
                    <Page pageNumber={1} />
                  </Document>
                </div>
              )}
            </div>
          </div>
          <div>
            <ul></ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contrato;
