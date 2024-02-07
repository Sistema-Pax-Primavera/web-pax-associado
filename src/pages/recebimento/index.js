import React, { useState } from 'react';
import './recebimento.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header from '../../components/header/header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { green, red } from '@mui/material/colors';
import { Snackbar } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MyAccordion from '../../components/accordion';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

function createData(parcela, datavencimento, valor, datapagamento) {
    return { parcela, datavencimento, valor, datapagamento };
}

const rows = [
    createData('03', '15/02/2024', '100,00', '18/02/2024'),
    createData('02', '15/01/2024', '100,00', '18/04/2024'),
    createData('01', '15/12/2023', '100,00', '16/02/2024'),
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 5,
    p: 4,
};

const Recebimento = () => {
    const [quantidadeMensalidades, setQuantidadeMensalidades] = useState('');
    const [totalPagar, setTotalPagar] = useState('');
    const [valorOriginal, setValorOriginal] = useState('');
    const [desconto, setDesconto] = useState('');
    const [parcelasAdicionais, setParcelasAdicionais] = useState([{ formaPagamento: '', valor: '' }]);
    const [receberDisponivel, setReceberDisponivel] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [mensagemCor, setMensagemCor] = useState(red[500]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleQuantidadeChange = (event) => {
        const quantidade = event.target.value;
        setQuantidadeMensalidades(quantidade);
        const valorParcela = 100; // Valor fixo por parcela
        const total = valorParcela * quantidade; // Calcula o valor total
        setValorOriginal(total.toFixed(2)); // Atualiza o valor original
        setTotalPagar(total.toFixed(2)); // Atualiza o valor total
        setDesconto('');
    };

    const handleChange = (index, campo, valor) => {
        const newParcelas = [...parcelasAdicionais];
        if (campo === 'formaPagamento') {
            newParcelas[index].formaPagamento = valor;
        } else if (campo === 'valor') {
            newParcelas[index].valor = valor;
        }
        setParcelasAdicionais(newParcelas);
    };

    const aplicarDesconto = () => {
        const valorComDesconto = parseFloat(valorOriginal) - parseFloat(desconto || 0);
        const valorComDescontoFormatado = valorComDesconto.toFixed(2);
        setTotalPagar(valorComDescontoFormatado);
        setReceberDisponivel(true);
    };

    const handleAdicionarParcela = () => {
        setParcelasAdicionais([...parcelasAdicionais, { formaPagamento: '', valor: '' }]);

    };

    const handleRemoverParcela = (index) => {
        const novasParcelas = parcelasAdicionais.filter((_, i) => i !== index);
        setParcelasAdicionais(novasParcelas);
    };

    const handleReceber = () => {
        let somaValores = parseFloat(totalPagar);
        parcelasAdicionais.forEach(parcela => {
            somaValores -= parseFloat(parcela.valor);
        });
    
        if (somaValores === 0) {
            setMensagem('Pagamento Realizado!');
            setMensagemCor(green[500]);
            // Verifica se a forma de pagamento é PIX
            const isPixPayment = parcelasAdicionais.some(parcela => parcela.formaPagamento === 'PIX');
            if (isPixPayment) {
                handleOpen(); // Abre a modal se o pagamento for via PIX
            }
        } else {
            setMensagem('Pagamento não realizado!');
            setMensagemCor(red[500]);
        }
    };
    

    const handleCloseMensagem = () => {
        setMensagem('');
    };
    return (
        <div className='container-associados'>
            <Header />
            <div className='dados-recebimento-associado'>
                <div className='fundo-recebimento'>
                    <div className='icones-nome'>
                        <label><AccountCircleIcon fontSize={'small'} />Carlos Henrique Nº do Contrato - 789776 </label>
                    </div>
                    <div className='tabela-acerto-recebimento'>
                        <div className='recebimento-associado'>
                            <div className='campos-recebimento'>
                                <div className='linhas-recebimento'>
                                    <div className='recebimento-01'>
                                        <label>Quant. Mensalidades</label>
                                        <input type='number' value={quantidadeMensalidades} onChange={handleQuantidadeChange} />
                                    </div>
                                    <div className='recebimento-02'>
                                        <label>Total a Pagar</label>
                                        <input value={valorOriginal} readOnly />
                                    </div>
                                    <div className='recebimento-02'>
                                        <label>Desconto</label>
                                        <input type='number' value={desconto} onChange={(e) => setDesconto(e.target.value)} />
                                    </div>
                                    <button onClick={aplicarDesconto}>APLICAR DESCONTO</button>
                                    <div className='recebimento-01'>
                                        <label>Valor com Desconto</label>
                                        <input type='number' value={totalPagar} disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div className='pag-dupl-men'>
                            <div className='duplica-adiciona-recebimento'>
                                {parcelasAdicionais.map((parcela, index) => (
                                    <div key={index} className='muda-linha-recebimento'>
                                        <div className='recebimento-associado'>
                                            <div className='campos-recebimento'>
                                                <div className='linhas-recebimento'>
                                                    <div className='forma-pagamento-recebimento'>
                                                        <label>Forma de Pagamento</label>
                                                        <select value={parcela.formaPagamento} onChange={(e) => handleChange(index, 'formaPagamento', e.target.value)}>
                                                            <option>Dinheiro</option>
                                                            <option>Débito</option>
                                                            <option>Crédito</option>
                                                            <option>PIX</option>
                                                            <option>Bancário</option>
                                                            <option>Cheque</option>
                                                        </select>
                                                    </div>
                                                    {parcela.formaPagamento === 'Bancário' && (
                                                        <div className='conta-bancaria-recebimento'>
                                                            <label>Conta</label>
                                                            <select value={parcela.valor} onChange={(e) => handleChange(index, 'valor', e.target.value)}>
                                                                <option>Conta 1</option>
                                                                <option>Conta 2</option>
                                                                <option>Conta 3</option>
                                                            </select>
                                                        </div>
                                                    )}
                                                    <div className='conta-bancaria-recebimento'>
                                                        <label>Total a Pagar</label>
                                                        <input value={parcela.valor} onChange={(e) => handleChange(index, 'valor', e.target.value)} />

                                                    </div>

                                                    <div className='deleta-recebimento-associado'>
                                                        {index > 0 && (
                                                            <button onClick={() => handleRemoverParcela(index)}>
                                                                <HighlightOffIcon fontSize={'small'} />
                                                            </button>

                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}

                            </div>
                            <div className='adicionar-recebimento-forma'>
                                <button onClick={handleAdicionarParcela}><AddCircleOutlineIcon fontSize={'small'} /></button>
                            </div>

                        </div>
                        <div className='receber-add-recebimento'>

                            <button onClick={handleReceber} disabled={!receberDisponivel}>RECEBER</button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        <div className='icones-nome'>
                                            <label><CurrencyExchangeIcon fontSize={'small'} />Acertar pagamento</label>
                                        </div>
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <div>
                                            <label>Aponte para o QR code e realize o pagamento!</label>
                                        </div>
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>




                        <Snackbar
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={mensagem !== ''}
                            autoHideDuration={6000}
                            onClose={handleCloseMensagem}
                            message={mensagem}
                            ContentProps={{
                                style: { backgroundColor: mensagemCor },
                            }}
                        />

                    </div>
                </div>


                <div className='acordion-recebimento'>
                    <MyAccordion
                        title="Histórico de Pagamento"
                        icon={<AssessmentIcon />}
                        expandedIcon={<ExpandMoreIcon />}
                    >
                        <div>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{ fontSize: 12 }}>DATA VENCIMENTO</TableCell>
                                            <TableCell align="center" sx={{ fontSize: 12 }}>VALOR</TableCell>
                                            <TableCell align="center" sx={{ fontSize: 12 }}>DATA PAGAMENTO</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.parcela}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center" sx={{ fontSize: 12 }}>{row.datavencimento}</TableCell>
                                                <TableCell align="center" sx={{ fontSize: 12 }}>{row.valor}</TableCell>
                                                <TableCell align="center" sx={{ fontSize: 12 }}>{row.datapagamento}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </MyAccordion>

                </div>

            </div>
        </div>
    );
}

export default Recebimento;
