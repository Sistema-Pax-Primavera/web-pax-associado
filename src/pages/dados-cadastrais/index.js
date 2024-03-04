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

    const [nacionalidade, setNacionalidade] = useState(true);
    const classes = useStyles();
    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const [carenciaAtivada, setCarenciaAtivada] = useState(cliente.is_carencia);
    const [cremacaoAtivada, setCremacaoAtivada] = useState(cliente.is_cremacao);
    const [isComercialEnabled, setIsComercialEnabled] = useState(cliente.is_endereco_comercial);
    const [idioma, setIdioma] = useState(false);
    const [isIdioma, setIsIdioma] = useState(true);

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

    const verificaIdioma = () => {
        const savedUsuario = localStorage.getItem("usuario");
        if (savedUsuario) {
            const usuarioObj = JSON.parse(savedUsuario)
            setIdioma(usuarioObj.idioma === 'BR' ? false : true);
        }

        setIsIdioma(false)
    }

    useEffect(() => {
        const intervalId = setInterval(verificaIdioma, 100);

        // Certificar-se de limpar o intervalo quando o componente for desmontado
        return () => {
            clearInterval(intervalId);
        };
    }, []);


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
                <Header cliente={cliente} idioma={idioma} />
                <div className='dados-cadastrais-associado'>

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
                                <input type="text" name="cpf" value={cliente.rg} />
                            </div>
                            <div className='campos-02'>
                                <label>Data Nascimento</label>
                                <DateMaskInput data={cliente.data_nascimento} />
                            </div>
                            <div className='campos-03'>
                                <label>Contrato</label>
                                <input type="text" name="contrato" value={cliente.n_contrato} onChange={handleChange} />
                            </div>
                            <div className='campo-info-bairro'>
                                <label>Gênero</label>
                                <select value={cliente.genero}>
                                    <option value={'Masculino'}>Masculino</option>
                                    <option value={'Feminino'}>Feminino</option>
                                    <option value={'Nao Binario'}>Não Binario</option>
                                    <option value={'Nao Informado'}>Não Informado</option>
                                </select>
                            </div>
                            <div className='campo-info-bairro'>
                                <label>Religião</label>
                                <select value={cliente.religiao}>
                                    <option value={cliente.religiao}>{cliente.religiao}</option>
                                </select>
                            </div>
                            <div className='campo-info-bairro'>
                                <label>UF</label>
                                <select value={cliente.uf}>
                                    <option value={'MS'}>Mato Grosso do Sul</option>
                                    <option value={'SP'}>São Paulo</option>
                                    <option value={'RJ'}>Rio de Janeiro</option>
                                    <option value={'MT'}>Mato Grosso</option>
                                </select>
                            </div>
                            <div className='campos-02'>
                                <label>Naturalidade</label>
                                <input type="text" name="contrato" value={cliente.naturalidade} />
                            </div>
                            <div className='campos-02'>
                                <label>Nacionalidade</label>
                                <select value={cliente.nacionalidade} onChange={handleNacionalidade}>
                                    <option value={'Brasileiro'}>Brasileiro(a)</option>
                                    <option value={'Estrangueiro'}>Estrangueiro(a)</option>
                                </select>
                            </div>
                            <div className='campos-02'>
                                <label>Profissão</label>
                                <select value={cliente.profissao}>
                                    <option value={cliente.profissao}>{cliente.profissao}</option>
                                </select>
                            </div>
                            <div className='campos-02'>
                                <label>Estado Civil</label>
                                <select value={cliente.estado_civil}>
                                    <option value={cliente.estado_civil}>{cliente.estado_civil}</option>
                                </select>
                            </div>
                            <div className='campos-02'>
                                <label>Data do Contrato</label>
                                <DateMaskInput data={cliente.data_contrato} />
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
                                    <div className='data-inicio-carencia'>
                                        <label>Data Inicio Carência</label>
                                        <DateMaskInput data={cliente.data_inicio_carencia} />
                                    </div>
                                    <div className='data-fim-carencia'>
                                        <label>Data Final Carência</label>
                                        <DateMaskInput data={cliente.data_final_carencia} />

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
                                    <DateMaskInput data={cliente.data_cremacao} />
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
                                <input type="text" name="cep" value={cliente.cep_residencial} />
                            </div>
                            <div className='campo-info-bairro'>
                                <label>UF</label>
                                <select value={cliente.uf_residencial}>
                                    <option value={'MS'}>Mato Grosso do Sul</option>
                                    <option value={'SP'}>São Paulo</option>
                                    <option value={'RJ'}>Rio de Janeiro</option>
                                    <option value={'MT'}>Mato Grosso</option>
                                </select>
                            </div>
                            <div className='campos-02'>
                                <label>Município</label>
                                <input type="text" name="municipio" value={cliente.municipio_residencial} />
                            </div>

                            <div className='campos-02'>
                                <label>Bairro</label>
                                <input type="text" name="bairro" value={cliente.bairro_residencial} />
                            </div>
                            <div className='campo-info-bairro'>
                                <label>Quadra</label>
                                <input type="text" name="quadra" value={cliente.quadra_residencial} />
                            </div>
                            <div className='campo-info-bairro'>
                                <label>Lote</label>
                                <input type="text" name="lote" value={cliente.lote_residencial} />
                            </div>
                            <div className='campo-info-bairro'>
                                <label>Nº</label>
                                <input type="text" name="nResidencia" value={cliente.numero_residencial} />
                            </div>
                            <div className='campo-info-bairro'>
                                <label>Tipo</label>
                                <select value={cliente.tipo_endereco_residencial}>
                                    <option value={cliente.tipo_endereco_residencial}>{cliente.tipo_endereco_residencial}</option>
                                </select>
                            </div>
                        </div>
                        <div className='container-linha'>
                            <div className='campos-01'>
                                <label>Rua</label>
                                <input type="text" name="rua" value={cliente.rua_residencial} />
                            </div>
                            <div className='campos-02'>
                                <label>Complemento</label>
                                <input type="text" name="complemento" value={cliente.complemento_residencial} />
                            </div>
                            <div className='campos-01'>
                                <label>Endereço Comercial</label>
                                <Switch
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
                                <label> <ApartmentIcon />Dados Comerciais</label>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='layout-linha'>
                                <div className='container-linha'>
                                    <div className='campos-03'>
                                        <label>CEP</label>
                                        <input type="text" name="cepComercial" value={cliente.cep_comercial} />
                                    </div>
                                    <div className='campo-info-bairro'>
                                        <label>UF</label>
                                        <select value={cliente.uf_comercial}>
                                            <option value={'MS'}>Mato Grosso do Sul</option>
                                            <option value={'SP'}>São Paulo</option>
                                            <option value={'RJ'}>Rio de Janeiro</option>
                                            <option value={'MT'}>Mato Grosso</option>
                                        </select>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Município</label>
                                        <input type="text" name="municipioComercial" value={cliente.municipio_comercial} />
                                    </div>
                                    <div className='campos-02'>
                                        <label>Bairro</label>
                                        <input type="text" name="bairroComercial" value={cliente.bairro_comercial} />
                                    </div>
                                    <div className='campos-04'>
                                        <label>Quadra</label>
                                        <input type="text" name="quadraComercial" value={cliente.quadra_comercial} />
                                    </div>
                                    <div className='campo-info-bairro'>
                                        <label>Lote</label>
                                        <input type="text" name="loteComercial" value={cliente.lote_comercial} />
                                    </div>
                                    <div className='campo-info-bairro'>
                                        <label>Nº</label>
                                        <input type="text" name="numeroComercial" value={cliente.numero_comercial} />
                                    </div>
                                    <div className='campo-info-bairro'>
                                        <label>Tipo</label>
                                        <select value={cliente.tipo_endereco_comercial}>
                                            <option value={cliente.tipo_endereco_comercial}>{cliente.tipo_endereco_comercial}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='container-linha'>
                                    <div className='campos-01'>
                                        <label>Rua</label>
                                        <input type="text" name="ruaComercial" value={cliente.rua_comercial} />
                                    </div>
                                    <div className='campos-02'>
                                        <label>Complemento</label>
                                        <input type="text" name="complementoComercial" value={cliente.complemento_comercial} />
                                    </div>

                                </div>
                            </div>

                        </AccordionDetails>
                    </Accordion>

                    <div className='salvar-associado'>
                        <button>SALVAR</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DadosCadastrais;
