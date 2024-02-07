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
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useLocation } from 'react-router-dom';

function createData(parcela, vencimento, valor, status) {
    return { parcela, vencimento, valor, status };
}

const rows = [
    createData('03', '15/02/2024', '100,00', 'ABERTA'),
    createData('02', '15/01/2024', '100,00', 'FECHADA'),
    createData('01', '15/12/2023', '100,00', 'FECHADA'),
];

const Recebimento = () => {
    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const [quantidadeMensalidades, setQuantidadeMensalidades] = useState('');
    const [totalPagar, setTotalPagar] = useState('');
    const [desconto, setDesconto] = useState('');
    const [formaPagamento, setFormaPagamento] = useState('');
    const [contaSelecionada, setContaSelecionada] = useState('');
    const [parcelasAdicionais, setParcelasAdicionais] = useState([{ formaPagamento: '', conta: '' }]); // Inicialize com um item vazio
    const [parcelaSelecionada, setParcelaSelecionada] = useState(null); // Estado para rastrear a parcela selecionada
    const [camposHabilitados, setCamposHabilitados] = useState(false);
    const [duplicado, setDuplicado] = useState(false); // Estado para rastrear se há campos duplicados

    const handleQuantidadeChange = (event) => {
        const quantidade = event.target.value;
        setQuantidadeMensalidades(quantidade);
        const valorParcela = 100; // Valor fixo por parcela
        const total = valorParcela * quantidade; // Calcula o valor total
        setTotalPagar(total.toFixed(2)); // Atualiza o valor total
        setDesconto('');
        setCamposHabilitados(quantidade !== '');
    };

    const handleChange = (campo, valor) => {
        if (campo === 'desconto') {
            setDesconto(valor);
        } else if (campo === 'formaPagamento') {
            setFormaPagamento(valor);
            // Se a forma de pagamento não for "Bancário", limpar a conta selecionada
            if (valor !== 'Bancário') {
                setContaSelecionada('');
            }
        } else if (campo === 'conta') {
            setContaSelecionada(valor);
        }
    };

    const aplicarDesconto = () => {
        const valorComDesconto = parseFloat(totalPagar) - parseFloat(desconto || 0);
        const valorComDescontoFormatado = valorComDesconto.toFixed(2);
        setTotalPagar(valorComDescontoFormatado);
        setCamposHabilitados(false);
    };

    const handleAdicionarParcela = () => {
        setParcelasAdicionais([...parcelasAdicionais, { formaPagamento: '', conta: '' }]);
    };

    return (
        <div className='container-associados'>
            <Header cliente={cliente} />
            <div className='dados-cobranca-associado'>
                <div className='fundo-recebimento'>
                    <div className='icones-nome'>
                        <label><AccountCircleIcon fontSize={'small'} />{cliente ? cliente.nome : ''} Nº do Contrato - {cliente ? cliente.contrato : ''}</label>
                    </div>
                    <div className='tabela-acerto-recebimento'>
                        <div className='recebimento-associado'>
                            <div className='campos-recebimento'>
                                <div className='linhas-recebimento'>
                                    <div className='recebimento-01'>
                                        <label>Quant. Mensalidades</label>
                                        <input value={quantidadeMensalidades} onChange={handleQuantidadeChange} />
                                    </div>
                                    <div className='recebimento-02'>
                                        <label>Total a Pagar</label>
                                        <input value={totalPagar} disabled />
                                    </div>
                                    <div className='recebimento-02'>
                                        <label>Desconto</label>
                                        <input value={desconto} onChange={(e) => handleChange('desconto', e.target.value)} />
                                    </div>
                                    <button onClick={aplicarDesconto} disabled={!camposHabilitados}>APLICAR DESCONTO</button>
                                    <div className='recebimento-01'>
                                        <label>Valor com Desconto</label>
                                        <input value={totalPagar} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {parcelasAdicionais.map((parcela, index) => (
                            <div key={index} className='recebimento-associado'>
                                <div className='campos-recebimento'>
                                    <div className='linhas-recebimento'>
                                        <div className='recebimento-01'>
                                            <label>Forma de Pagamento</label>
                                            <select value={parcela.formaPagamento} onChange={(e) => {
                                                handleChange('formaPagamento', e.target.value);
                                                setParcelaSelecionada(index); // Define a parcela selecionada
                                            }}>
                                                <option>Dinheiro</option>
                                                <option>Débito</option>
                                                <option>Crédito</option>
                                                <option>PIX</option>
                                                <option>Bancário</option>
                                                <option>Cheque</option>
                                            </select>
                                        </div>
                                        {parcelaSelecionada === index && parcela.formaPagamento === 'Bancário' && (
                                            <div className='recebimento-02'>
                                                <label>Conta</label>
                                                <select value={parcela.conta} onChange={(e) => handleChange('conta', e.target.value)}>
                                                    <option>Conta 1</option>
                                                    <option>Conta 2</option>
                                                    <option>Conta 3</option>
                                                </select>
                                            </div>
                                        )}
                                        <div className='recebimento-02'>
                                            <label>Total a Pagar</label>
                                            <input />
                                        </div>
                                        {index > 0 && <button onClick={() => handleRemoverParcela(index)}>Remover</button>}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='recebimento-associado'>
                            <div className='campos-recebimento'>
                                <div className='linhas-recebimento'>
                                    <button onClick={handleAdicionarParcela}>Adicionar</button>
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
    );
}

export default Recebimento;
