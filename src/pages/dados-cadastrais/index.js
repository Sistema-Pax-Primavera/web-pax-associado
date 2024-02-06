import React, { useState } from 'react';
import Header from '../../components/header/header';
import './dados-cadastrais.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { makeStyles } from '@material-ui/core/styles';
import MyAccordion from '../../components/accordion';
import DateMaskInput from '../../components/inputs';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const useStyles = makeStyles((theme) => ({
    accordionContainer: {
        border: `1px solid rgba(0, 0, 0, 0.1)`, // Adicione uma borda padrão
        borderColor: theme.palette.grey[300],
        borderRadius: theme.shape.borderRadius, // Cor da borda padrão (pode ser ajustada)
    },
    accordion: {
        width: '100%',
        borderRadius: theme.shape.borderRadius,
        '&.Mui-expanded': {
            borderColor: 'rgba(255, 0, 0, 0.5)', // Cor da borda com opacidade quando o Accordion está expandido
        },
    },
}));
const DadosCadastrais = () => {
    const [isComercialEnabled, setIsComercialEnabled] = useState(false);
    const classes = useStyles();

    return (
            <div className='container-associados'>
                <Header />
                <div className='container'>
                    <MyAccordion
                        title="Dados do Titular"
                        icon={<AccountCircleIcon />}
                        expandedIcon={<ExpandMoreIcon />}
                    >
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
                                <DateMaskInput />
                            </div>
                            <div className='campos-03'>
                                <label>Contrato</label>
                                <input></input>
                            </div>
                            <div className='campo-info-bairro'>
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
                                <DateMaskInput />
                            </div>
                            <div className='campo-info-bairro'>
                                <label>Cremação</label>
                                <Switch {...label} size="small" />
                            </div>
                        </div>
                    </MyAccordion>
                    <MyAccordion
                        title="Dados Residenciais"
                        icon={<HomeIcon />}
                        expandedIcon={<ExpandMoreIcon />}
                    >
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
                            <div className='campo-info-bairro'>
                                <label>Quadra</label>
                                <input></input>
                            </div>
                            <div className='campo-info-bairro'>
                                <label>Lote</label>
                                <input></input>
                            </div>
                            <div className='campo-info-bairro'>
                                <label>Nº</label>
                                <input></input>
                            </div>
                            <div className='campo-info-bairro'>
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
                    </MyAccordion>
                    <div className={classes.accordionContainer}>
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
                                        <div className='campo-info-bairro'>
                                            <label>Lote</label>
                                            <input></input>
                                        </div>
                                        <div className='campo-info-bairro'>
                                            <label>Nº</label>
                                            <input></input>
                                        </div>
                                        <div className='campo-info-bairro'>
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
                    <div className='salva-dependentes'>
                        <button>SALVAR</button>
                    </div>

                </div>
            </div>

    );
};

export default DadosCadastrais;
