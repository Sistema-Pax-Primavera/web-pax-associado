import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Switch from '@mui/material/Switch';
import DateMaskInput from '../../components/inputs';
import './dados_cadastrais.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MyAccordion from '../../components/accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import { useLocation } from 'react-router-dom';

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
    const [cremacaoAtivada, setCremacaoAtivada] = useState(false);
    const [carenciaAtivada, setCarenciaAtivada] = useState(false);
    const [nacionalidade, setNacionalidade] = useState(true);
    const classes = useStyles();
    const location = useLocation();
    const cliente = location.state && location.state.cliente;

    const handleSwitchChange = () => {
        // Atualiza o estado do switch
        setCremacaoAtivada(!cremacaoAtivada);
    };

    const handleSwitchCarencia = () => {
        // Atualiza o estado do switch
        setCarenciaAtivada(!carenciaAtivada);
    };

    const handleNacionalidade = (event) => {
        setNacionalidade(JSON.parse(event.target.value));
    };

    useEffect(() => {
        if (cliente) {
            console.log('Dados do cliente recebidos no Dados Cadastrais:', cliente);
        }
    }, [cliente]);


    const handleChange = (event) => {
        const { name, value } = event.target;
        // setDadosCliente((prevDadosCliente) => ({
        //     ...prevDadosCliente,
        //     [name]: value,
        // }));
    };

    return (
        <>
            <div className='container-associados'>
                <Header cliente={cliente} />
                <div className='dados-cobranca-associado'>

                    <MyAccordion
                        title="Dados do Titular"
                        icon={<AccountCircleIcon />}
                        expandedIcon={<ExpandMoreIcon />}
                    >
                        <div className='container-linha'>
                            <div className='campos-01'>
                                <label>Nome<span className='obrigatorio'> *</span></label>
                                <input type="text" name="nome" value={cliente.nome} onChange={handleChange} />
                            </div>
                            {nacionalidade ?
                                <div className='campos-02'>
                                    <label>CPF<span className='obrigatorio'> *</span> </label>
                                    <input type="text" name="cpf" value={cliente.cpf} onChange={handleChange} />
                                </div>
                                : <></>}
                            <div className='campos-03'>
                                <label>RG<span className='obrigatorio'> *</span></label>
                                <input></input>
                            </div>
                            <div className='campos-02'>
                                <label>Data Nascimento</label>
                                <DateMaskInput />
                            </div>
                            <div className='campos-03'>
                                <label>Contrato</label>
                                <input type="text" name="contrato" value={cliente.contrato} onChange={handleChange} />
                            </div>
                            <div className='campo-info-bairro'>
                                <label>Genero</label>
                                <select></select>
                            </div>
                            <div className='campo-info-bairro'>
                                <label>Religião</label>
                                <select>

                                </select>
                            </div>
                            <div className='campo-info-bairro'>
                                <label>UF</label>
                                <select></select>
                            </div>
                            <div className='campos-02'>
                                <label>Naturalidade</label>
                                <input></input>
                            </div>
                            <div className='campos-02'>
                                <label>Nacionalidade</label>
                                <select value={nacionalidade} onChange={handleNacionalidade}>
                                    <option value={'true'}>Brasileiro(a)</option>
                                    <option value={'false'}>Estrangueiro(a)</option>
                                </select>
                            </div>
                            <div className='campos-02'>
                                <label>Profissão</label>
                                <select></select>
                            </div>
                            <div className='campos-02'>
                                <label>Estado Civil</label>
                                <select></select>
                            </div>
                            <div className='campos-02'>
                                <label>Data do Contrato</label>
                                <DateMaskInput />
                            </div>
                        </div>
                        <div className='container-linha'>
                            <div className='campos-02'>
                                <label>Carência Padrão ?</label>
                                <Switch
                                    checked={carenciaAtivada}
                                    onChange={handleSwitchCarencia}
                                    size="small" />
                            </div>
                            {!carenciaAtivada && (
                                <>
                                    <div className='campos-02'>
                                        <label>Data Inicio Carência</label>
                                        <DateMaskInput />
                                    </div>
                                    <div className='campos-02'>
                                        <label>Data Final Carência</label>
                                        <DateMaskInput />

                                    </div>
                                </>
                            )}
                            <div className='campo-info-bairro'>
                                <label>Cremação ?</label>
                                <Switch
                                    checked={cremacaoAtivada}
                                    onChange={handleSwitchChange}
                                    size="small" />
                            </div>
                            {cremacaoAtivada && (
                                <div className='campos-02'>
                                    <label>Data da Cremação</label>
                                    <DateMaskInput />
                                </div>
                            )}
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
                            <div className='campo-info-bairro'>
                                <label>UF</label>
                                <select></select>
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
                                    <div className='campo-info-bairro'>
                                        <label>UF</label>
                                        <select></select>
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

                    <div className='salvar-associado'>
                        <button>SALVAR</button>
                        <button>REGISTRAR OBITO</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DadosCadastrais;
