import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import './dependentes.css'
import DateMaskInput from '../../components/inputs';
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom';
import TableComponent from '../../components/table/table';
import { headerDependente } from '../../entities/headers/header-dependente';

function createData(name, filiacao, carencia, falecimento, valor, especie) {
    return { name, filiacao, carencia, falecimento, valor, especie };
}

const rows = [
    createData('Tor', '15/01/2023', '15/01/2025', '00/00/0000', '100,00', "Gator"),
];

const Dependentes = () => {
    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const idioma = location.state && location.state.idioma;
    const [mostrarFormularioPet, setMostrarFormularioPet] = useState(false);
    const [mostrarFormularioCremacao, setMostrarFormularioCremacao] = useState(false);
    const [obito, setObito] = useState(false);
    const [dependente, setDependente] = useState(null);

    const handleSwitchObito = () => {
        setObito(!obito);
    };

    const mostrarFormulario = (tipo) => {
        setMostrarFormularioPet(tipo === 'pet');
        setMostrarFormularioCremacao(tipo === 'cremacao');
    };

    const handleEditDependente = (dependente) => {
        if (dependente.tipo == 'Humano') {
            setDependente(dependente);
            setMostrarFormularioCremacao(true);
        } else {
            setDependente(dependente);
            setMostrarFormularioCremacao(false);
            setMostrarFormularioPet(true);
        }
    };

    const handleSalvarDependente = (id) => {
        console.log(id);
    };

    return (
        <>
            <div className='container-associados'>
                <Header cliente={cliente} idioma={idioma} />
                <div className='container-dependentes'>
                    <div className='pet-cremacao-humana'>

                        <p><AccountCircleIcon /> {cliente ? cliente.nome : ''} Nº do Contrato - {cliente ? cliente.n_contrato : ''}</p>
                        <button
                            className={mostrarFormularioPet ? '' : 'botao-ativo'}
                            onClick={() => mostrarFormulario('pet')}
                        >
                            <PetsIcon fontSize={'small'} />  PET
                        </button>
                        <button
                            className={mostrarFormularioCremacao ? '' : 'botao-ativo'}
                            onClick={() => mostrarFormulario('cremacao')}
                        >
                            <PersonIcon fontSize={'small'} /> HUMANO
                        </button>
                    </div>
                    {mostrarFormularioPet && (
                        <div>
                            <div className='layout-linha'>
                                <div className='container-linha'>
                                    <div className='campos-01'>
                                        <label>Nome</label>
                                        <input type='text' value={dependente ? dependente.nome : ''} />
                                    </div>
                                    <div className='campos-02'>
                                        <label>Data Nascimento</label>
                                        <DateMaskInput data={dependente ? dependente.data_nascimento : ''} />
                                    </div>
                                    <div className='data-filiacao-03'>
                                        <label>Data Filiação</label>
                                        <DateMaskInput data={dependente ? dependente.data_filiacao : ''} />
                                    </div>
                                    <div className='campos-03'>
                                        <label>Peso</label>
                                        <input type='text' value={dependente ? dependente.peso : ''} />
                                    </div>
                                    <div className='campos-03'>
                                        <label>Altura</label>
                                        <input type='text' value={dependente ? dependente.altura : ''} />
                                    </div>
                                    <div className='campos-03'>
                                        <label>Cor</label>
                                        <input type='text' value={dependente ? dependente.cor : ''} />
                                    </div>

                                </div>
                                <div className='container-linha'>
                                    <div className='campos-02'>
                                        <label>Espécie</label>
                                        <select value={dependente ? dependente.especie : ''}>
                                            <option value={dependente ? dependente.especie : ''}>{dependente ? dependente.especie : ''}</option>
                                        </select>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Raça</label>
                                        <select value={dependente ? dependente.raca : ''}>
                                            <option value={dependente ? dependente.raca : ''}>{dependente ? dependente.raca : ''}</option>
                                        </select>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Porte</label>
                                        <select value={dependente ? dependente.porte : ''}>
                                            <option value={dependente ? dependente.porte : ''}>{dependente ? dependente.porte : ''}</option>
                                        </select>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Modalidade</label>
                                        <select value={dependente ? dependente.modalidade : ''}>
                                            <option value={dependente ? dependente.modalidade : ''}>{dependente ? dependente.modalidade : ''}</option>
                                        </select>
                                    </div>

                                    <div className='campos-02'>
                                        <label> Falecimento</label>
                                        <DateMaskInput data={dependente ? dependente.data_falecimento : ''} />
                                    </div>

                                    <div className='salva-dependentes'>
                                        <button>SALVAR</button>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='container-linha2'>
                                <TableContainer component={Paper}>
                                    <Table sx={{ maxWidth: 900 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nome</TableCell>
                                                <TableCell align="center">Filiação</TableCell>
                                                <TableCell align="center">Fim Carência</TableCell>
                                                <TableCell align="center">Falecimento</TableCell>
                                                <TableCell align="center">Valor</TableCell>
                                                <TableCell align="center">Espécie</TableCell>
                                                <TableCell align="center">Opções</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="center">{row.filiacao}</TableCell>
                                                    <TableCell align="center">{row.carencia}</TableCell>
                                                    <TableCell align="center">{row.falecimento}</TableCell>
                                                    <TableCell align="center">{row.valor}</TableCell>
                                                    <TableCell align="center">{row.especie}</TableCell>
                                                    <TableCell align="center">
                                                        <div className='botao-opcao'>
                                                            <div className='edit-botao'>
                                                                <button><ModeEditOutlineIcon fontSize={'small'} /></button>
                                                            </div>
                                                            <div className='delete-botao'>
                                                                <button><DeleteForeverIcon fontSize={'small'} /></button>
                                                            </div>

                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div> */}
                        </div>
                    )}
                    {mostrarFormularioCremacao && (
                        <div>
                            <div className='layout-linha'>
                                <div className='container-linha'>
                                    <div className='campos-01'>
                                        <label>Nome</label>
                                        <input type='text' value={dependente ? dependente.nome : ''} />
                                    </div>
                                    <div className='campos-02'>
                                        <label>Data Nascimento</label>
                                        <DateMaskInput data={dependente ? dependente.data_nascimento : ''} />
                                    </div>
                                    <div className='data-filiacao-03'>
                                        <label>Data Filiação</label>
                                        <DateMaskInput data={dependente ? dependente.data_filiacao : ''} />
                                    </div>
                                    <div className='campos-02'>
                                        <label>CPF</label>
                                        <input type='text' value={dependente ? dependente.cpf : ''} />
                                    </div>
                                    <div className='campos-02'>
                                        <label>Parentesco</label>
                                        <select value={dependente ? dependente.parentesco : ''}>
                                            <option value={dependente ? dependente.parentesco : ''}>{dependente ? dependente.parentesco : ''}</option>
                                        </select>
                                    </div>

                                </div>
                                <div className='container-linha'>
                                    <div className='campos-04'>
                                        <label>Status</label>
                                        <input type='text' value={dependente ? dependente.status : ''} />
                                    </div>
                                    <div className='campos-02'>
                                        <label>Valor Adicional</label>
                                        <input type='text' value={dependente ? dependente.adicao : ''} />
                                    </div>
                                    <div className='campos-02'>
                                        <label> Falecimento</label>
                                        <DateMaskInput data={dependente ? dependente.data_falecimento : ''} />
                                    </div>

                                    <div className='salva-dependentes'>
                                        {/* <button
                                            onClick={handleSalvarDependente(dependente.id)}>SALVAR</button> */}
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
                    <div className='container-linha2'>
                        <TableComponent headers={headerDependente} rows={cliente.dependentes} actionsLabel={["Ações", "Acciones"]} actionCalls={{
                            delete: (e) => console.log(e),
                            edit: (e) => handleEditDependente(e),
                            //view: (e) => handleOpenButtonClick(e),
                            promote: (e) => console.log('promover'),
                        }} />
                        {/* <TableContainer component={Paper}>
                                    <Table sx={{ maxWidth: 900 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nome</TableCell>
                                                <TableCell align="center">Filiação</TableCell>
                                                <TableCell align="center">Fim Carência</TableCell>
                                                <TableCell align="center">Falecimento</TableCell>
                                                <TableCell align="center">Valor</TableCell>
                                                <TableCell align="center">Opções</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="center">{row.filiacao}</TableCell>
                                                    <TableCell align="center">{row.carencia}</TableCell>
                                                    <TableCell align="center">{row.falecimento}</TableCell>
                                                    <TableCell align="center">{row.valor}</TableCell>
                                                    <TableCell align="center">
                                                        <div className='botao-opcao'>
                                                            <div className='edit-botao'>
                                                                <button><ModeEditOutlineIcon fontSize={'small'} /></button>
                                                            </div>
                                                            <div className='delete-botao'>
                                                                <button><DeleteForeverIcon fontSize={'small'} /></button>
                                                            </div>
                                                            <div className='promove-dependente'>
                                                                <button>Promover</button>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer> */}
                    </div>
                </div>

            </div>

        </>
    )
}

export default Dependentes;
