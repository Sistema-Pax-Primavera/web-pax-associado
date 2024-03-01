import React from 'react';
import Header from '../../components/header/header';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './pdr.css'
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
import { useLocation } from 'react-router-dom';

function createData(id, parcela, vencimento, valor, status) {
    return { id, parcela, vencimento, valor, status };
}

const rows = [
    createData(1, '10/02/2024', 90, 'ABERTA',),
    createData(1, '12/02/2024', 90, 'FECHADA',),
];


const PDR = () => {
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
                                    <div className='campos-06-pdr'>
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


