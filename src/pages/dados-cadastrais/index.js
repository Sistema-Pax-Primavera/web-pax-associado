import React, { useState } from 'react';
import Header from '../../components/header';
import './dados-cadastrais.css'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const DadosCadastrais = () => {
    const [isComercialEnabled, setIsComercialEnabled] = useState(false);


    return (
        <>
            <div className='container-associados'>
                <Header />
                <div className='container'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <div className='icones-nome'>
                                <label><AccountCircleIcon />Dados do Titular</label>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>

                            <div className='layout-linha'>
                                <div className='container-linha'>
                                    <div className='campos-01'>
                                        <label>Nome</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>CPF</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-03'>
                                        <label>RG</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Data Nascimento</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-03'>
                                        <label>Contrato</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-04'>
                                        <label>UF</label>
                                        <select></select>
                                    </div>
                                </div>
                                <div className='container-linha'>
                                    <div className='campos-02'>
                                        <label>Naturalidade</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Profissão</label>
                                        <select></select>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Nascionalidade</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Data do Contrato</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-04'>
                                        <label>Cremação</label>
                                        <Switch {...label} size="small" />
                                    </div>
                                </div>
                            </div>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div className='icones-nome'>
                                <label> <HomeIcon />Dados Residenciais</label>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>


                            <div className='layout-linha'>
                                <div className='container-linha'>
                                    <div className='campos-03'>
                                        <label>CEP</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Município</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Bairro</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-04'>
                                        <label>Quadra</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-04'>
                                        <label>Lote</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-04'>
                                        <label>Nº</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-04'>
                                        <label>Tipo</label>
                                        <select></select>
                                    </div>
                                </div>
                                <div className='container-linha'>
                                    <div className='campos-01'>
                                        <label>Rua</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Complemento</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-01'>
                                        <label>Endereço Comercial</label>
                                        <Switch
                                            {...label}
                                            size="small"
                                            checked={isComercialEnabled}
                                            onChange={() => setIsComercialEnabled(!isComercialEnabled)}
                                        />
                                    </div>
                                </div>
                            </div>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={isComercialEnabled ? '' : 'Mui-disabled'}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div className='icones-nome'>
                                <label> <ApartmentIcon />Endereço Comercial</label>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>


                            <div className='layout-linha'>
                                <div className='container-linha'>
                                    <div className='campos-03'>
                                        <label>CEP</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Município</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Bairro</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-04'>
                                        <label>Quadra</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-04'>
                                        <label>Lote</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-04'>
                                        <label>Nº</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-04'>
                                        <label>Tipo</label>
                                        <select></select>
                                    </div>
                                </div>
                                <div className='container-linha'>
                                    <div className='campos-01'>
                                        <label>Rua</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Complemento</label>
                                        <input></input>
                                    </div>

                                </div>
                            </div>

                        </AccordionDetails>
                    </Accordion>


                </div>

            </div>
        </>

    );
};

export default DadosCadastrais;
