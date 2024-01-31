import React from 'react'
import Header from '../../components/header/header';
import './historico-pet.css';
import { Pets, Event, Healing, Vaccines } from '@mui/icons-material';

const HistoricoPET = () => {

    const historicos = [
        {
            nome: 'Rex',
            dataNascimento: '01/01/2018',
            procedimento: 'Consulta de rotina',
            dataProcedimento: '10/02/2022',
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
                <Header />
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
