import React, { useState } from 'react';
import Header from '../../components/header/header';
import './dependentes.css'
import DateMaskInput from '../../components/inputs';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Dependentes = () => {
    const [mostrarFormularioPet, setMostrarFormularioPet] = useState(false);
    const [mostrarFormularioCremacao, setMostrarFormularioCremacao] = useState(true);

    const mostrarFormulario = (tipo) => {
        setMostrarFormularioPet(tipo === 'pet');
        setMostrarFormularioCremacao(tipo === 'cremacao');
    };

    return (
        <>
            <div className='container-associados'>
                <Header />
                <div className='container-dependentes'>
                    <div className='pet-cremacao-humana'>
                        <button
                            className={mostrarFormularioPet ? '' : 'botao-ativo'}
                            onClick={() => mostrarFormulario('pet')}
                        >
                            PET
                        </button>
                        <button
                            className={mostrarFormularioCremacao ? '' : 'botao-ativo'}
                            onClick={() => mostrarFormulario('cremacao')}
                        >
                            CREMAÇÃO HUMANA
                        </button>
                    </div>
                    {mostrarFormularioPet && (
                        <div>
                            <h1>teste</h1>
                        </div>
                    )}
                    {mostrarFormularioCremacao && (
                        <div>
                            <div className='layout-linha'>
                                <div className='container-linha'>
                                    <div className='campos-01'>
                                        <label>Nome</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Data Nascimento</label>
                                        <DateMaskInput />
                                    </div>
                                    <div className='campos-03'>
                                        <label>Data Filiação</label>
                                        <DateMaskInput />
                                    </div>
                                    <div className='campos-02'>
                                        <label>CPF</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Parentesco</label>
                                        <select></select>
                                    </div>

                                </div>
                                <div className='container-linha'>
                                    <div className='campos-04'>
                                        <label>Status</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Valor Adicional</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-01'>
                                        <label>Baixa de Óbito</label>
                                        <div className='baixa-obito'>
                                            <Switch {...label} size="small" />
                                            <label>TITULAR</label>
                                            <Switch {...label} size="small" />
                                            <label>DEPENDENTE</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='container-linha'>
                                    <div className='campos-legenda'>
                                        <div className='legenda-cremacao'>
                                            <div className='legenda-amarela'></div>
                                            <label>Em Carência</label>
                                            <div className='legenda-roxa'></div>
                                            <label>Falecido</label>
                                            <div className='legenda-laranja'></div>
                                            <label>Filho com 21 Anos</label>
                                            <div className='legenda-vermelho'></div>
                                            <label>Inativo ou Promovido</label>
                                            <div className='legenda-ativo'></div>
                                            <label>Ativo</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </>
    )
}

export default Dependentes;
