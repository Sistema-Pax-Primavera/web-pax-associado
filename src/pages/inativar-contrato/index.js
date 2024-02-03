import React from 'react'
import Header from '../../components/header/header';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default InativarContrato;
