import React from 'react'
import Header from '../../components/header/header';
import './historico-funeraria.css';

const HistoricoFuneraria = () => {

    const historicos = [
        {
            nome: 'Joao',
            dataNascimento: '01/01/2018',
            plano: 'Luxo',
            dataFalecimento: '10/02/2022',
            parentesco: 'Pai',
            cremacao: true,
            dataCremacao: '15/02/2022'
        },
        {
            nome: 'Julia',
            dataNascimento: '01/01/1985',
            plano: 'Super Luxo',
            dataFalecimento: '10/02/2022',
            parentesco: 'Conjugue',
            cremacao: false
        },
        {
            nome: 'Ana',
            dataNascimento: '01/01/2005',
            plano: 'Luxo',
            dataFalecimento: '10/01/2024',
            parentesco: 'Filha',
            cremacao: true,
            dataCremacao: '15/02/2022'
        },
    ];

    return (
        <>
            <div className='container-associados'>
                <Header />
                <div className="historico-container-funeraria">
                    {historicos.map((historico, index) => (
                        <div className="historico-card-funeraria" key={index}>
                            <div className="info-funeraria">
                                <p><strong>Nome:</strong> {historico.nome}</p>
                                <p><strong>Data de Nascimento:</strong> {historico.dataNascimento}</p>
                                <p><strong>Plano:</strong> {historico.plano}</p>
                                <p><strong>Data de Falecimento:</strong> {historico.dataFalecimento}</p>
                                <p><strong>Parentesco:</strong> {historico.parentesco}</p>
                                {historico.cremacao == true && <p><strong>Data da Cremacao:</strong> {historico.dataCremacao}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HistoricoFuneraria;