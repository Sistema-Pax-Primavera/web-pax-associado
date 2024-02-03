import React from 'react'
import Header from '../../components/header/header';
import DateMaskInput from '../../components/inputs';
import './observacao.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function createData(name, data, usuario, ) {
    return { name, data, usuario,  };
}

const rows = [
    createData('Teste', '15/01/2023', 'Vanderlei', ),
];


const Observacao = () => {
    return (
        <>
            <div className='container-associados'>
                <Header />
                <div className='container-contato-associado'>
                    <div className='icones-nome'>
                        <label><AccountCircleIcon fontSize={'small'} />Carlos Henrique Nº do Contrato - 789776 </label>

                    </div>
                    <div className='container-linha'>
                        <div className='campos-01'>
                            <label>Assunto</label>
                            <input></input>
                        </div>
                        <div className='campos-03'>
                            <label>Data</label>
                            <DateMaskInput />
                        </div>
                        <div className='campos-01'>
                            <label>Cliente</label>
                            <input></input>
                        </div>
                    </div>
                    <div className='container-linha'>

                        <div className='textarea'>
                            <label>Informações</label>
                            <textarea placeholder='Escreva seu texto aqui' wrap="soft"></textarea>
                        </div>
                    </div>
                    <div className='salva-observacao'>
                        <button>SALVAR</button>
                    </div>
                    <div className='container-linha2'>
                                <TableContainer component={Paper}>
                                    <Table sx={{ maxWidth: 900 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Assunto</TableCell>
                                                <TableCell align="center">Data</TableCell>
                                                <TableCell align="center">Usuário</TableCell>                                           
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
                                                    <TableCell align="center">{row.data}</TableCell>
                                                    <TableCell align="center">{row.usuario}</TableCell>
                                                    <TableCell align="center">
                                                        <div className='botao-opcao'>
                                                            <div className='edit-botao'>
                                                                <button><RemoveRedEyeIcon fontSize={'small'} /></button>
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
            </div>

        </>
    )
}

export default Observacao;
