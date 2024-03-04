import React from 'react'
import Header from '../../components/header/header';
import './historico-pet.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom';
import CardePet from '../../components/card-pet';
import PetImage from '../../../assets/pet.png'; // Importe a imagem padrão
import ConsultaImage from '../../../assets/consulta.png'; // Importe a imagem para consulta
import Castracao from '../../../assets/castracao.png';

const HistoricoPET = () => {
    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const idioma = location.state && location.state.idioma;
    const historicos = [
        {
            nome: 'Rex',
            datanascimento: '01/01/2018',
            procedimento: 'Consulta de rotina',
            dataprocedimento: '10/02/2022',
            status: 'ativo',
            imagem: ConsultaImage, // Defina a imagem para consulta
        },
        {
            nome: 'Rex',
            datanascimento: '01/01/2018',
            procedimento: 'Vacinação',
            dataprocedimento: '15/02/2022',
            status: 'ativo',
            imagem: PetImage, // Defina a imagem padrão para vacinação
        },
        {
            nome: 'Bob',
            datanascimento: '05/03/2019',
            procedimento: 'Vacinação',
            dataprocedimento: '15/03/2022',
            status: 'inativo',
            imagem: PetImage,
        },
        {
            nome: 'Marie',
            datanascimento: '05/03/2020',
            procedimento: 'Consulta de rotina',
            dataprocedimento: '16/01/2022',
            status: 'ativo',
            imagem: ConsultaImage,
        },
        {
            nome: 'Marie',
            datanascimento: '05/03/2020',
            procedimento: 'Castração',
            dataprocedimento: '15/01/2022',
            status: 'ativo',
            imagem: Castracao,
        },
    ];

    return (
        <>
            <div className='container-associados'>
                <Header cliente={cliente} idioma={idioma} />
                <div className='fundo-historico'>
                    <div className='icones-nome'>
                        <label><AccountCircleIcon /> {cliente ? cliente.nome : ''} Nº do Contrato - {cliente ? cliente.n_contrato : ''}</label>
                    </div>
                    <div className='cards-funeraria'>
                        {historicos.map((cliente, index) => (
                            <CardePet

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

export default HistoricoPET;
