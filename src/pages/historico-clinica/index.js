import React from 'react'
import Header from '../../components/header/header';
import { Pets, Event, Healing, Vaccines, MedicalInformation, Medication } from '@mui/icons-material';
import './historico-clinica.css';

const HistoricoClinica = () => {

    const historicos = [
        {
            nome: 'Joao',
            dataNascimento: '01/01/2018',
            procedimento: 'Exame de sangue',
            dataProcedimento: '10/02/2022',
            status: 'ativo',
        },
        {
            nome: 'Maria',
            dataNascimento: '05/03/2001',
            procedimento: 'Estetica',
            dataProcedimento: '15/03/2022',
            status: 'ativo',
        },
        {
            nome: 'Lucas',
            dataNascimento: '05/03/2005',
            procedimento: 'Dentista',
            dataProcedimento: '15/01/2022',
            status: 'ativo',
        },
    ];

    const getIconByProcedimento = (procedimento) => {
        switch (procedimento) {
            case 'Estetica':
                return <MedicalInformation />;
            case 'Exame de sangue':
                return <MedicalInformation />;
            case 'Dentista':
                return <MedicalInformation />;
            // Adicione mais casos conforme necessário
            default:
                return null;
        }
    };

    return (
        <>
            <div className='container-associados'>
                <Header />
                <div className="historico-container-clinica">
                    {historicos.map((historico, index) => (
                        <div className="historico-card-clinica" key={index}>
                            <div className="icone-clinica">{getIconByProcedimento(historico.procedimento)}</div>
                            <div className="info-clinica">
                                <p><strong>Nome:</strong> {historico.nome}</p>
                                <p><strong>Data de Nascimento:</strong> {historico.dataNascimento}</p>
                                <p><strong>Procedimento:</strong> {historico.procedimento}</p>
                                <p><strong>Data do Procedimento:</strong> {historico.dataProcedimento}</p>
                                <p><strong>Status:</strong> {historico.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default HistoricoClinica;
