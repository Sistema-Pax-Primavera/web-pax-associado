import React from 'react'
import Header from '../../components/header/header';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './inativar-contrato.css'

const InativarContrato = () => {
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
                            <div className='campos-03'>
                                <label>Data</label>
                                <input></input>
                            </div>
                            <div className='campos-01'>
                                <label>Motivo da inativação</label>
                                <select></select>
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

export default InativarContrato;
