import React, { useState } from 'react';
import './recebimento.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header from '../../components/header/header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(parcela, vencimento, valor, status,) {
    return { parcela, vencimento, valor, status, };
}

const rows = [
    createData('03', '15/02/2024', '100,00', 'ABERTA',),
    createData('02', '15/01/2024', '100,00', 'FECHADA'),
    createData('01', '15/12/2023', '100,00', 'FECHADA'),
];

const Recebimento = () => {
    const [parcelas, setParcelas] = useState([
        { quantidade: '', valor: '', desconto: '', totalPagar: '', formaPagamento: '', conta: '' }
    ]);

    const addParcela = () => {
        setParcelas([...parcelas, { quantidade: '', valor: '', desconto: '', totalPagar: '', formaPagamento: '', conta: '' }]);
    };
    return (
        <div className='container-associados'>
            <Header />
            <div className='dados-cobranca-associado'>
                <div className='fundo-cobranca'>
                    <div className='icones-nome'>
                        <label><AccountCircleIcon fontSize={'small'} />Carlos Henrique Nº do Contrato - 789776 </label>
                    </div>
                    <div className='tabela-acerto-recebimento'>
                        <div className='recebimento-associado'>
                            <div className='campos-recebimento'>
                                {parcelas.map((parcela, index) => (
                                    <div key={index} className='campos-recebimento'>
                                        <div className='linhas-recebimento'>
                                            <div className='recebimento-01'>
                                                <label>Quant. Mensalidades</label>
                                                <input value={parcela.quantidade} onChange={(e) => handleChange(index, 'quantidade', e.target.value)} />
                                            </div>
                                            <div className='recebimento-02'>
                                                <label>Total a Pagar</label>
                                                <input></input>
                                            </div>
                                            <div className='recebimento-02'>
                                                <label>Desconto</label>
                                                <input></input>
                                            </div>
                                            <button>APLICAR DESCONTO</button>
                                        </div>
                                        <div className='linhas-recebimento'>
                                            <div className='recebimento-01'>
                                                <label>Forma Pagamento</label>
                                                <select></select>
                                            </div>
                                            <div className='recebimento-02'>
                                                <label>Conta</label>
                                                <select></select>
                                            </div>
                                            <div className='recebimento-02'>
                                                <label>Valor Total</label>
                                                <select></select>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                                <div className='container-linhas'>
                                <button onClick={addParcela}>+</button>
                                <button>PAGAR</button>  
                                </div>                                                          
                            </div>
                          
                        </div>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 800 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>PARCELA</TableCell>
                                            <TableCell align="center">VENCIMENTO</TableCell>
                                            <TableCell align="center">VALOR</TableCell>
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
            </div>
        </div>
    )
}

export default Recebimento
