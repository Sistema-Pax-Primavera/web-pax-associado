import React from 'react'
import Header from '../../components/header/header';
import './dados_cobranca.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import DateMaskInput from '../../components/inputs';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const DadosCobranca = () => {
  return (
    <>
      <div className='container-associados'>
        <Header />
        <div className='dados-cobranca-associado'>
          <div className='fundo-cobranca'>
            <div className='icones-nome'>
              <label><AccountCircleIcon fontSize={'small'} />Carlos Henrique Nº do Contrato - 789776 </label>
            </div>
            <div className='container-linha'>
              <div className='campos-cadastrais-02'>
                <label>Dia de Pagamento </label>
                <input></input>
              </div>
              <div className='campos-cadastrais-02'>
                <label>Primeria Parcela</label>
                <DateMaskInput />
              </div>
              <div className='campos-cadastrais-03'>
                <label>Ordem Rota</label>
                <input></input>
              </div>
              <div className='campos-cadastrais-04'>
                <label>Contrato</label>
                <input></input>
              </div>
              <div className='campos-cadastrais-02'>
                <label>Plano</label>
                <select></select>
              </div>
              <div className='campos-cadastrais-06'>
                <label>Região</label>
                <select></select>
              </div>
            </div>
            <div className='container-linha'>
              <div className='campos-cadastrais-04'>
                <label>Transferido</label>
                <Switch {...label} size="small" />
              </div>
              <div className='campos-cadastrais-02'>
                <label>Pagar Adesão</label>
                <Switch {...label} size="small" />
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
