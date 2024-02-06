import React, { useState } from 'react';
import Header from '../../components/header/header';
import './dependentes.css'
import DateMaskInput from '../../components/inputs';
import Switch from '@mui/material/Switch';
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
import AttributionIcon from '@mui/icons-material/Attribution';
function createData(name, filiacao, carencia, falecimento, valor, especie) {
    return { name, filiacao, carencia, falecimento, valor, especie };
}

const rows = [
    createData('Tor', '15/01/2023', '15/01/2025', '00/00/0000', '100,00', "Gator"),
];

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

                        <p><AccountCircleIcon /> Carlos Henrique Nº do Contrato - 123789</p>
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
                            <PersonIcon fontSize={'small'} /> CREMAÇÃO HUMANA
                        </button>
                    </div>
                    {mostrarFormularioPet && (
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
                                    <div className='campos-03'>
                                        <label>Peso</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-03'>
                                        <label>Altura</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-03'>
                                        <label>Cor</label>
                                        <input></input>
                                    </div>

                                </div>
                                <div className='container-linha'>
                                    <div className='campos-02'>
                                        <label>Espécie</label>
                                        <select></select>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Raça</label>
                                        <select></select>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Porte</label>
                                        <select></select>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Modalidade</label>
                                        <select></select>
                                    </div>
                                    <div className='salva-dependentes'>
                                        <button>SALVAR</button>
                                    </div>
                                </div>

                            </div>
                            <div className='container-linha2'>
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
                            </div>
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
                                    <div className='salva-dependentes'>
                                        <button>SALVAR</button>
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
                            <div className='container-linha2'>
                                <TableContainer component={Paper}>
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
                                                                <button><AttributionIcon fontSize={'small'} /></button>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </>
    )
}

export default Dependentes;
