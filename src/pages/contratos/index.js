import React, { useState } from 'react';
import Header from '../../components/header/header';
import './contratos.css';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskIcon from '@mui/icons-material/Task';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { saveAs } from 'file-saver';  // Importar a função saveAs do file-saver
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from 'react-router-dom';

const Contrato = () => {
  const location = useLocation();
  const cliente = location.state && location.state.cliente;
  const idioma = location.state && location.state.idioma;
  const [arquivos, setArquivos] = useState([]);
  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);

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

  const handleDownloadClick = (arquivo) => {
    saveAs(arquivo, arquivo.name);  // Utilizar a função saveAs para fazer o download
  };

  return (
    <>
      <div className='container-associados'>
        <Header cliente={cliente} idioma={idioma} />
        <div className='container-contrato-associado'>
          <div className='icones-nome'>
            <label>
              <AssignmentIcon fontSize={'small'} />{cliente.nome} Nº do Contrato - {cliente.contrato}
            </label>
          </div>
          <div className='container-contratos'>
            <div className='tipo-contrato-associado'>
              <div className='contrato-associados-anexo'>
                <label>Adicionar</label>
                <div className='document'>
                  <a>
                    <PostAddIcon fontSize={'large'} />
                  </a>
                  <input type="file" onChange={handleProcurarChange} />
                  <button onClick={handleAnexarClick}>ANEXAR</button>
                </div>
              </div>

              <div className='document2'>
                {arquivos.map((arquivo, index) => (
                  <div key={index}>
                    <div className='contrato-associados'>
                      <TaskIcon />
                      <label> {arquivo.name}</label>
                      <div className='baixa-delete-contrato'>
                        <div className='deleta-contrato'>
                          <button onClick={() => handleExcluirClick(index)}><DeleteIcon fontSize={'small'} /></button>
                        </div>
                        <div className='baixa-contrato'>
                          <button onClick={() => handleDownloadClick(arquivo)}><DownloadIcon fontSize={'small'} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
