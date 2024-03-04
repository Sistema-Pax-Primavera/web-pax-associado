import React, { useState, useEffect } from 'react'
import Header from '../../components/header/header';
import './dados_cobranca.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import DateMaskInput from '../../components/inputs';
import { useLocation } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const DadosCobranca = () => {
  const location = useLocation();
  const cliente = location.state && location.state.cliente;
  const idioma = location.state && location.state.idioma;
  const [transferidoAtivada, setTransferidoAtivada] = useState(cliente.is_transferido);
  const [pagarAdesaoAtivada, setpagarAdesaoAtivada] = useState(cliente.is_pagou_adesao);
  const SwitchTransferido = () => {
    // Atualiza o estado do switch
    setTransferidoAtivada(!transferidoAtivada);
  };
  const SwitchAdesao = () => {
    // Atualiza o estado do switch
    setpagarAdesaoAtivada(!pagarAdesaoAtivada);
  };

  useEffect(() => {
    if (cliente) {
      console.log('Dados do cliente recebidos no Dados Cobranca:', cliente);
    }
  }, [cliente]);

  return (
    <>
      <div className='container-associados'>
        <Header cliente={cliente} idioma={idioma} />
        <div className='dados-cobranca-associado'>
          <div className='fundo-cobranca'>
            <div className='icones-nome'>
              <label><AccountCircleIcon fontSize={'small'} />{cliente ? cliente.nome : ''} Nº do Contrato - {cliente ? cliente.n_contrato : ''} </label>
            </div>
            <div className='container-linha'>
              <div className='campos-cadastrais-02'>
                <label>Dia de Pagamento </label>
                <input value={cliente.dia_pagamento} />
              </div>
              <div className='campos-cadastrais-02'>
                <label>Primeria Parcela</label>
                <DateMaskInput data={cliente.data_primeira_parcela} />
              </div>
              <div className='campos-cadastrais-03'>
                <label>Ordem Rota</label>
                <input value={cliente.ordem_rota} />
              </div>
              <div className='campos-cadastrais-04'>
                <label>Contrato</label>
                <input value={cliente.n_contrato} />
              </div>
              <div className='campos-cadastrais-02'>
                <label>Plano</label>
                <select value={cliente.plano}>
                  <option value={cliente.plano}>{cliente.plano}</option>
                </select>
              </div>
              <div className='campos-cadastrais-06'>
                <label>Região</label>
                <select value={cliente.regiao}>
                  <option value={'Norte'}>Norte</option>
                  <option value={'Sul'}>Sul</option>
                  <option value={'Sudeste'}>Sudeste</option>
                  <option value={'Nordeste'}>Nordeste</option>
                </select>
              </div>
            </div>
            <div className='container-linha'>
              <div className='campos-cadastrais-04'>
                <label>Transferido</label>
                <Switch
                  checked={transferidoAtivada}
                  onChange={SwitchTransferido}
                  size="small" />
              </div>
              <div className='campos-cadastrais-02'>
                <label>Pagar Adesão</label>
                <Switch
                  checked={pagarAdesaoAtivada}
                  onChange={SwitchAdesao}
                  size="small" />
              </div>
            </div>

          </div>
          <div className='salvar-associado'>
            <button>SALVAR</button>
          </div>
        </div>




      </div>

    </>
  )
}

export default DadosCobranca;
