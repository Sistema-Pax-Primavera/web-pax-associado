import React, { useState } from 'react';
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
import { useLocation } from 'react-router-dom';

function createData(name, data, usuario) {
    return { name, data, usuario };
}

const Observacao = () => {
    const location = useLocation();
    const cliente = location.state && location.state.cliente;

    const [formData, setFormData] = useState({
        assunto: '',
        data: '',
        cliente: '',
        informacoes: ''
    });

    const [rows, setRows] = useState([
        createData('Teste', '15/01/2023', 'Vanderlei'),
    ]);

    const handleViewClick = (rowData) => {
        setFormData({
            assunto: rowData.name,
            data: rowData.data,
            cliente: rowData.usuario,
            informacoes: 'Informações da linha clicada...'
        });
    };

    const handleSaveClick = () => {
        const updatedRows = rows.map(row => {
            if (row.name === formData.assunto) {
                return {
                    ...row,
                    data: formData.data,
                    usuario: formData.cliente
                };
            }
            return row;
        });
        setRows(updatedRows);
        // Limpar os campos do formulário após salvar
        setFormData({
            assunto: '',
            data: '',
            cliente: '',
            informacoes: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <div className='container-associados'>
                <Header cliente={cliente} />
                <div className='container-observacao-associado'>
                    <div className='icones-nome'>
                        <label><AccountCircleIcon fontSize={'small'} />{cliente ? cliente.nome : ''} Nº do Contrato - {cliente ? cliente.contrato : ''}</label>
                    </div>
                    <div className='container-linha'>
                        <div className='campos-01'>
                            <label>Assunto</label>
                            <input name="assunto" value={formData.assunto} onChange={handleChange}></input>
                        </div>
                        <div className='data-observacao'>
                            <label>Data</label>
                            <DateMaskInput name="data" value={formData.data} onChange={handleChange} />
                        </div>
                        <div className='campos-01'>
                            <label>Cliente</label>
                            <input name="cliente" value={formData.cliente} onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className='container-linha'>
                        <div className='textarea'>
                            <label>Informações</label>
                            <textarea name="informacoes" value={formData.informacoes} onChange={handleChange} placeholder='Escreva seu texto aqui' wrap="soft"></textarea>
                        </div>
                    </div>
                    <div className='salva-observacao'>
                        <button onClick={handleSaveClick}>SALVAR</button>
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
                                                        <button onClick={() => handleViewClick(row)}><RemoveRedEyeIcon fontSize={'small'} /></button>
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
    );
};

export default Observacao;
