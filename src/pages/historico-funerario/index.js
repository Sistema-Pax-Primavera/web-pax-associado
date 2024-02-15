import React from 'react';
import Header from '../../components/header/header';
import './historico-funeraria.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Carde from '../../components/card-funeraria';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { useLocation } from 'react-router-dom';

const HistoricoFuneraria = () => {
    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const historicos = [
        {
            icone: <EmojiPeopleIcon />,
            nome: 'Joao',
            datanascimento: '01/01/2018',
            plano: 'Luxo',
            datafalecimento: '10/02/2022',
            parentesco: 'Pai',
            cremacao: true,
            datacremacao: '15/02/2022'
        },
        {
            nome: 'Julia',
            datanascimento: '01/01/1985',
            plano: 'Super Luxo',
            datafalecimento: '10/02/2022',
            parentesco: 'Conjugue',
            cremacao: false,
            datacremacao: '15/02/2022'
        },
        {
            nome: 'Ana',
            datanascimento: '01/01/2005',
            plano: 'Luxo',
            datafalecimento: '10/01/2024',
            parentesco: 'Filha',
            cremacao: true,
            datacremacao: '15/02/2022'
        },
    ];

    return (
        <div className='container-associados'>
            <Header cliente={cliente} />
            <div className='fundo-historico'>
                <div className='icones-nome'>
                    <label><AccountCircleIcon /> {cliente ? cliente.nome : ''} Nº do Contrato - {cliente ? cliente.contrato : ''}</label>
                </div>

                <div className='cards-funeraria'>
                    {historicos.map((cliente, index) => (
                        <Carde

                            key={index}
                            icone={cliente.icone}
                            nome={cliente.nome}
                            datanascimento={cliente.datanascimento}
                            plano={cliente.plano}
                            datafalecimento={cliente.datafalecimento}
                            parentesco={cliente.parentesco}
                            datacremacao={cliente.datacremacao}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default HistoricoFuneraria;
