import React from 'react'
import Header from '../../components/header/header';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PrintIcon from '@mui/icons-material/Print';
import { useLocation } from 'react-router-dom';
import './extrato.css'

const Extrato = () => {
    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const idioma = location.state && location.state.idioma;

    function extra(id, valor, mes, formapagamento) {
        return { id, valor, mes, formapagamento };
    }

    const extrato = [
        extra(50, '05/02/2023', 'DINHEIRO'),
        extra(50, '05/03/2023', 'DINHEIRO'),
    ];


    return (
        <>
            <div className='container-associados'>
                <Header cliente={cliente} idioma={idioma} />
                <div className='dados-cobranca-associado'>
                    <div className='fundo-cobranca'>
                        <div className='icones-nome'>
                            <label><AccountCircleIcon fontSize={'small'} />{cliente ? cliente.nome : ''} Nº do Contrato - {cliente ? cliente.contrato : ''}</label>
                        </div>
                        <div>
                            <div>
                                <div className='container-linha'>
                                    <div className='campos-03'>
                                        <label>De</label>
                                        <input></input>
                                    </div>
                                    <div className='campos-03'>
                                        <label>Até</label>
                                        <input></input>
                                    </div>
                                    <div className='filtro-extrato'>
                                        <button>FILTRAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container-linha'>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>VALOR</TableCell>
                                            <TableCell align="center">MÊS</TableCell>
                                            <TableCell align="center">FORMA DE PAGAMENTO</TableCell>
                                            <TableCell align="center">IMPRIMIR</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {extrato.map((extratos) => (
                                            <TableRow
                                                key={extratos.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {extratos.valor}
                                                </TableCell>
                                                <TableCell align="center">{extratos.mes}</TableCell>
                                                <TableCell align="center">{extratos.formapagamento}</TableCell>
                                                <TableCell align="center">{
                                                    <div className='icones-nome-imprimir'>
                                                        <label><PrintIcon fontSize={'small'} /> </label>
                                                    </div>
                                                }</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className='imprimir-anual-extrato'>
                                <button>IMPRIMIR ANUAL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Extrato;
