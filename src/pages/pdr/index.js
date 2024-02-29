import React, { useState } from 'react';
import Header from '../../components/header/header';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddchartIcon from '@mui/icons-material/Addchart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import './pdr.css'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CancelIcon from '@mui/icons-material/Cancel';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DateMaskInput from '../../components/inputs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MyAccordion from '../../components/accordion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Select } from '@mui/material';
import { useLocation } from 'react-router-dom';
import TaskIcon from '@mui/icons-material/Task';

function createData(id, parcela, vencimento, valor, status) {
    return { id, parcela, vencimento, valor, status };
}

const rows = [
    createData(1, '10/02/2024', 90, 'ABERTA',),
    createData(1, '12/02/2024', 90, 'FECHADA',),
];


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: 'background.paper',
    borderRadius: 5,
    p: 4,
};

const PDR = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const idioma = location.state && location.state.idioma;

    return (
        <>
            <div className='container-associados'>
                <Header cliente={cliente} idioma={idioma} />
                <div className='container'>
                    <MyAccordion
                        title={`${cliente ? cliente.nome : ''} Nº do Contrato - ${cliente ? cliente.contrato : ''}`}
                        icon={<AccountCircleIcon />}
                        expandedIcon={<ExpandMoreIcon />}
                    >
                        <div className='divisao-align-itens'>
                            <div className='layout-linha'>
                                <div className='container-linha'>
                                    <div className='campos-01'>
                                        <label>Endereço</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-06'>
                                        <label>Último Pagamento</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-03'>
                                        <label>Status</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Plano</label>
                                        <input></input>
                                    </div>
                                    <div className='data-contrato'>
                                        <label>Data Contrato</label>
                                        <DateMaskInput />
                                    </div>
                                    <div className='campos-02'>
                                        <label>Dia Pagamento</label>
                                        <DateMaskInput />
                                    </div>
                                    <div className='campos-01'>
                                        <label>Região</label>
                                        <input></input>
                                    </div>
                                </div>
                                <div className='container-linha'>

                                </div>
                            </div>
                        </div>
                    </MyAccordion>
                    <MyAccordion
                        title="Histórico de Recebimento"
                        icon={<AnalyticsIcon />}
                        expandedIcon={<ExpandMoreIcon />}
                    >
                        <div className='layout-linha'>

                            <div className='container-linha'>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nº da Parcela</TableCell>
                                                <TableCell align="center">Vencimento</TableCell>
                                                <TableCell align="center">Valor</TableCell>
                                                <TableCell align="center">STATUS</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.parcela}
                                                    </TableCell>
                                                    <TableCell align="center">{row.vencimento}</TableCell>
                                                    <TableCell align="center">{row.valor}</TableCell>
                                                    <TableCell align="center">{row.status}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </div>
                        </div>
                    </MyAccordion>

                    <div className='salvar-associado'>
                        <button>SALVAR</button>
                    </div>

                </div >
            </div >

        </>
    );
};

export default PDR;


