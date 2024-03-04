import React from 'react'
import Header from '../../components/header/header';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom';
import './negociar.css'

const Negociar = () => {
    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const idioma = location.state && location.state.idioma;

    return (
        <>
            <div className='container-associados'>
                <Header cliente={cliente} idioma={idioma} />
                <div className='dados-negociar-associado'>
                    <div className='fundo-cobranca'>
                        <div className='icones-nome'>
                            <label><AccountCircleIcon fontSize={'small'} />{cliente ? cliente.nome : ''} Nº do Contrato - {cliente ? cliente.n_contrato : ''}</label>
                        </div>
                        <div className='container-linha'>
                            <div className='campos-necociacao'>
                                <label>Quant. Parcelas</label>
                                <input></input>
                            </div>
                            <div className='campos-necociacao2'>
                                <label>Motivo da Negociação</label>
                                <select></select>
                            </div>
                            <div className='campos-necociacao'>
                                <label>Valor Total</label>
                                <input></input>
                            </div>
                            <div className='campos-necociacao'>
                                <label>Valor Acertado</label>
                                <input></input>
                            </div>
                            <div className='inativa-contrato'>
                                <button>CONFIRMAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Negociar;
