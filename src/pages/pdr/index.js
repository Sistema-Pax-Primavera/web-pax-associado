import React, { useState } from 'react';
import Header from '../../components/header/header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddchartIcon from '@mui/icons-material/Addchart';
import { makeStyles } from '@material-ui/core/styles';
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
import Modals from '../../components/modal';
import MyAccordion from '../../components/accordion';

function createData(parcela, vencimento, valor, status) {
    return { parcela, vencimento, valor, status };
}

const rows = [
    createData(1, '10/02/2024', 90, 'ABERTA',),
    createData(1, '12/02/2024', 90, 'FECHADA',),
];


const PDR = () => {
    return (
        <>
            <div className='container-associados'>
                <Header />
                <div className='container'>
                    <MyAccordion
                        title="Carlos Henrique Nº do Contrato - 789776"
                        icon={<AccountCircleIcon />}
                        expandedIcon={<ExpandMoreIcon />}
                    >
                        <div className='divisao-align-itens'>
                            <div className='divisao-flex-direction'>
                                <Modals
                                    nomeButton="EXTRATO"
                                    title="Extrato"
                                    icon={<AddchartIcon fontSize={'small'} />}
                                    tamanhoModal={500}
                                >
                                    <div>
                                        <h1>teste1</h1>
                                    </div>
                                </Modals>

                                <Modals
                                    nomeButton="QUITAR"
                                    title="Quitar"
                                    icon={<CurrencyExchangeIcon fontSize={'small'} />}
                                    tamanhoModal={600}
                                >
                                    <div>
                                        <h1>teste2</h1>
                                    </div>
                                </Modals>

                                <Modals
                                    nomeButton="NEGOCIAR"
                                    title="Negociar"
                                    icon={<CreditScoreIcon fontSize={'small'} />}
                                    tamanhoModal={700}
                                >
                                    <div>
                                        <h1>teste3</h1>
                                    </div>
                                </Modals>

                                <Modals
                                    nomeButton="CANCELAR"
                                    title="Cancelar"
                                    icon={<CancelIcon fontSize={'small'} />}
                                    tamanhoModal={400}
                                >
                                    <div>
                                        <h1>teste4</h1>
                                    </div>
                                </Modals>


                            </div>
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

                                </div>
                                <div className='container-linha'>
                                    <div className='campos-01'>
                                        <label>Região</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-02'>
                                        <label>Data Contrato</label>
                                        <DateMaskInput />
                                    </div>
                                    <div className='campos-02'>
                                        <label>Dia Pagamento</label>
                                        <DateMaskInput />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MyAccordion>

                    <MyAccordion
                        title="Carência"
                        icon={<AnalyticsIcon />}
                        expandedIcon={<ExpandMoreIcon />}
                    >
                        <div className='layout-linha'>
                            <div className='container-linha'>
                                <div className='campos-04'>
                                    <label>Desconto</label>
                                    <input></input>
                                </div>
                                <div className='campos-02'>
                                    <label>Valor Total</label>
                                    <input></input>
                                </div>
                                <div className='campos-06'>
                                    <label>Forma de pagamento</label>
                                    <select></select>
                                </div>
                                <div className='campos-01'>
                                    <button>CONFIRMAR</button>
                                </div>

                            </div>
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
                                                    key={row.parcela}
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


                </div>
            </div>

        </>
    );
};

export default PDR;



