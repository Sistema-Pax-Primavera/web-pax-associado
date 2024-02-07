import React from 'react'
import Header from '../../components/header/header';
import './historico-pet.css';
import { Pets, Event, Healing, Vaccines } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

const HistoricoPET = () => {
    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const historicos = [
        {
            nome: 'Rex',
            dataNascimento: '01/01/2018',
            procedimento: 'Consulta de rotina',
            dataProcedimento: '10/02/2022',
            status: 'ativo',
        },
        {
            nome: 'Rex',
            dataNascimento: '01/01/2018',
            procedimento: 'Vacinação',
            dataProcedimento: '15/02/2022',
            status: 'ativo',
        },
        {
            nome: 'Bob',
            dataNascimento: '05/03/2019',
            procedimento: 'Vacinação',
            dataProcedimento: '15/03/2022',
            status: 'inativo',
            dataFalecimento: '20/03/2023',
        },
        {
            nome: 'Marie',
            dataNascimento: '05/03/2020',
            procedimento: 'Consulta de rotina',
            dataProcedimento: '16/01/2022',
            status: 'ativo',
        },
        {
            nome: 'Marie',
            dataNascimento: '05/03/2020',
            procedimento: 'Castração',
            dataProcedimento: '15/01/2022',
            status: 'ativo',
        },
    ];

    const getIconByProcedimento = (procedimento) => {
        switch (procedimento) {
            case 'Consulta de rotina':
                return <Pets />;
            case 'Vacinação':
                return <Vaccines />;
            case 'Castração':
                return <Healing />;
            // Adicione mais casos conforme necessário
            default:
                return null;
        }
    };

    return (
        <>
            <div className='container-associados'>
                <Header cliente={cliente} />
                <div className='icones-nome'>
                    <label><AccountCircleIcon fontSize={'small'} />{cliente.nome} Nº do Contrato - {cliente.contrato} </label>
                </div>
                <div className="historico-container">
                    {historicos.map((historico, index) => (
                        <div className="historico-card" key={index}>
                            <div className="icone">{getIconByProcedimento(historico.procedimento)}</div>
                            <div className="info">
                                <p><strong>Nome:</strong> {historico.nome}</p>
                                <p><strong>Data de Nascimento:</strong> {historico.dataNascimento}</p>
                                <p><strong>Procedimento:</strong> {historico.procedimento}</p>
                                <p><strong>Data do Procedimento:</strong> {historico.dataProcedimento}</p>
                                {historico.status === 'inativo' && <p><strong>Data de Falecimento:</strong> {historico.dataFalecimento}</p>}
                                <p><strong>Status:</strong> {historico.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default HistoricoPET;
