import React from 'react'
import Header from '../../components/header/header';
import './historico-clinica.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom';
import CardeClinica from '../../components/card-clinica';
import Dentista from '../../../assets/destista.png';
import Estetica from '../../../assets/estetica.png';
import Exame from '../../../assets/exame.png';

const HistoricoClinica = () => {
    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const idioma = location.state && location.state.idioma;
    const historicos = [
        {
            nome: 'Joao',
            datanascimento: '01/01/2018',
            procedimento: 'Exame de sangue',
            dataprocedimento: '10/02/2022',
            status: 'ativo',
            imagem: Exame,
        },
        {
            nome: 'Maria',
            datanascimento: '05/03/2001',
            procedimento: 'Estetica',
            dataprocedimento: '15/03/2022',
            status: 'ativo',
            imagem: Estetica,
        },
        {
            nome: 'Lucas',
            datanascimento: '05/03/2005',
            procedimento: 'Dentista',
            dataprocedimento: '15/01/2022',
            status: 'ativo',
            imagem: Dentista,
        },
    ];

    return (
        <>
            <div className='container-associados'>
                <Header cliente={cliente} idioma={idioma} />
                <div className="historico-clinica-funeraria">
                    <div className='icones-nome'>
                        <label><AccountCircleIcon /> {cliente ? cliente.nome : ''} Nº do Contrato - {cliente ? cliente.contrato : ''}</label>
                    </div>
                    <div className="historico-container-clinica">
                        {historicos.map((cliente, index) => (
                            <CardeClinica

                                key={index}
                                imagem={cliente.imagem}
                                nome={cliente.nome}
                                procedimento={cliente.procedimento}
                                datanascimento={cliente.datanascimento}
                                dataprocedimento={cliente.dataprocedimento}
                                status={cliente.status}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default HistoricoClinica;
