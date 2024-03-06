import React from 'react'
import Header from '../../components/header/header';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './registrar-obito.css'
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import ButtonText from '../../components/button-texto';

const RegistrarObito = () => {
    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const idioma = location.state && location.state.idioma;
    return (
        <>
            <div className='container-associados'>
                <Header cliente={cliente} idioma={idioma} />
                <div className='dados-cobranca-associado'>
                    <div className='fundo-cobranca'>
                        <div className='icones-nome'>
                            <label><AccountCircleIcon fontSize={'small'} />{cliente ? cliente.nome : ''} Nº do Contrato - {cliente ? cliente.n_contrato : ''}</label>
                        </div>
                        <div className='container-linha'>
                            <div className='data-obito-registro'>
                                <label>Data do Obito</label>
                                <input></input>
                            </div>
                            <div className='campos-01'>
                                <label>Selecione o cliente</label>
                                <select></select>
                            </div>
                            <div className='inativa-contrato'>
                                <ButtonText title="CONFIRMAR"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RegistrarObito;
