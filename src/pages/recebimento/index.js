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
import { useLocation } from 'react-router-dom';
import moment from "moment";
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PaidIcon from '@mui/icons-material/Paid';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CancelIcon from '@mui/icons-material/Cancel';

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
    const [parcelasAdicionais, setParcelasAdicionais] = useState([]);
    const [receberDisponivel, setReceberDisponivel] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const hoje = moment().format("DD/MM/YYYY");
    const hora = moment().format("HH:mm");
    const [mensagemCor, setMensagemCor] = useState(red[500]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => { setReceberDisponivel(false); setOpen(false); }
    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const [novaParcela, setNovaParcela] = useState({
        formaPagamento: 'Dinheiro',
        conta: 'Conta 1',
        valor: '',
    });

    const imprimirComprovante = async () => {
        let conteudoComprovante = `
    <style>
    
      @media print {
        /* Oculta cabeçalho e rodapé padrão do navegador */
        @page {
        margin:0;
          margin-top: 0;
          margin-bottom: 0;
        }
        body {
            
          padding-top:0; /* Adicione um espaço para a margem superior do comprovante */
        }
        /* Adicione outros estilos de impressão personalizados aqui */
      }

      /* Estilos visíveis na tela */
      body {
        font-family: Arial, sans-serif;
        font-size: 11px;
        margin: 25px;
      }
      .titulo {
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
      }
      .subtitulo {
        text-align: center;
        font-size: 12px;
        margin-bottom: 5px;
      }
      .cnpj {
        text-align: center;
        font-size: 10px;
      }
      .info {
        font-size: 11px;
        margin-bottom: 5px;
      }
      .linha {
        border-bottom: 1px solid #000;
        margin-bottom: 5px;
      }
      .parcela {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
      }
      .total {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        margin-bottom: 5px;
      }
      .contrato {
        margin-bottom: 5px;
      }
      .cliente {
        margin-bottom: 5px;
      }
      .obs {
        font-size: 11px;
        margin-bottom: 5px;
      }
      .assinatura {
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
      }
    </style>
    <div class="titulo">PAX PRIMAVERA</div>
    <div class="cnpj">CNPJ </div>
    <div class="subtitulo">TELEFONE (67) 3411 - 8200</div>
    <div class="subtitulo">IMPRESSÃO</div>
    <br>
    <div class="info">
        <div class="parcela">
            <div>DATA: ${hoje}</div>
            <div>HORA: ${hora}</div>
        </div>
    </div>
    <div class="info">USUARIO:</div>
    <div class="linha"></div>
    <div class="parcela">
      <div>Parcela</div>
      <div>VALOR</div>
    </div>
    <div class="linha"></div>
    <div class="parcela">
    <div class="data-vencimento">Data Vencimento</div>
    <div class="valor">Valor</div>
  </div> 
        </div>
    <div class="linha"></div>
    <div class="total">
      <div>2 Parcelas</div>
      <div>TOTAL = 300</div>
    </div>
    <div class="linha"></div>
    <div class="contrato">Data Pagamento: ${hoje}</div>
    <div class="contrato">Contrato: 00000</div>
    <div class="contrato">Regiao: COBRADOR</div>
    <div class="cliente">
    ADERBAL TESTE<br>
      RUA DOS BOBOS, N 0, BAIRRO DOIDO<br>
    </div>
    <div class="linha"></div>
    <div class="obs">BAIXE NOSSO APLICATIVO PAX PRIMAVERA<br>E CONFIRA NOSSAS PROMOÇÕES!</div>
    <div class="info">INFORMAÇÕES (67) 99680-8200</div>
    <br></br>
    <div class="linha"></div>
    <div class="assinatura">ADMINISTRADOR</div>
  `;
        const janelaImprimir = window.open("", "_blank");
        janelaImprimir.document.write(conteudoComprovante);
        janelaImprimir.document.close();

        // Verifica se a janela foi aberta corretamente
        if (janelaImprimir && !janelaImprimir.closed) {
            // Chama o método de impressão diretamente na janela atual
            janelaImprimir.print();
        } else {
            // Se não foi possível abrir uma nova janela, imprime na janela atual
            window.print();
        }
    };

    const handleQuantidadeChange = (event) => {
        const quantidade = event.target.value;
        const novoValor = parseFloat(quantidade);
        if (!isNaN(novoValor) && novoValor >= 0) {
            setQuantidadeMensalidades(quantidade);
            const valorParcela = 100; // Valor fixo por parcela
            const total = valorParcela * quantidade; // Calcula o valor total
            setValorOriginal(total.toFixed(2)); // Atualiza o valor original
            setTotalPagar(total.toFixed(2)); // Atualiza o valor total
            setDesconto('');
        } else {
            alert('Digite um valor válido (positivo ou zero)')
            setQuantidadeMensalidades('');
        }
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

    const handleNovaParcelaChange = (campo, valor) => {
        setNovaParcela({
            ...novaParcela,
            [campo]: valor,
        });
    };

    const handleAdicionarParcela = () => {
        if (!novaParcela.valor || isNaN(parseFloat(novaParcela.valor))) {
            alert('Digite um valor válido para a parcela.');
            return;
        }

        setParcelasAdicionais([...parcelasAdicionais, { ...novaParcela }]);
        setNovaParcela({
            formaPagamento: 'Dinheiro',
            conta: 'Conta 1',
            valor: '',
        });
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
                handleOpen();
                setParcelasAdicionais([]);
                setQuantidadeMensalidades('');
                setValorOriginal('');
                setDesconto('');
            } else {
                setParcelasAdicionais([]);
                setQuantidadeMensalidades('');
                setValorOriginal('');
                setDesconto('');
                imprimirComprovante();
            }
        } else if (somaValores > 0) {
            setMensagem('Pagamento incompleto!');
            setMensagemCor(red[500]);
        } else if (somaValores < 0) {
            setMensagem('Pagamento excede o valor a receber!');
            setMensagemCor(red[500]);
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
            <Header cliente={cliente} />
            <div className='dados-recebimento-associado'>
                <div className='fundo-recebimento'>
                    <div className='icones-nome'>
                        <label><AccountCircleIcon fontSize={'small'} />{cliente ? cliente.nome : ''} Nº do Contrato - {cliente ? cliente.contrato : ''}</label>
                    </div>
                    <div className="content-formulario-iniciar-atendimento2">
                        <div className="em-aberto">
                            <div className="icone-aberto">
                                <label>EM ABERTO:</label>
                                <div className='aberto-recebimento'>
                                    <AddAlertIcon fontSize='small' />
                                    <input
                                        placeholder="1"
                                        disabled={true}
                                        value={2}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="em-aberto2">
                            <div className="icone-aberto">
                                <label>VALOR:</label>
                                <div className='aberto-recebimento'>
                                    <PaidIcon fontSize='small' />
                                    <input
                                        disabled={true}
                                        value={300}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="em-aberto2">
                            <div className="icone-aberto">
                                <label>VALOR PLANO:</label>
                                <div className='aberto-recebimento'>
                                    <PriceChangeIcon fontSize='small' />
                                    <input
                                        disabled={true}
                                        value={100}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="em-aberto3">
                            <div className="icone-aberto5">
                                <label>ULT. MÊS PAGO:</label>
                                <div className='aberto-recebimento'>
                                    <CalendarMonthIcon fontSize='small' />
                                    <input
                                        value={'10/12/2023'}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="em-aberto3">
                            <div className="icone-aberto5">
                                <label>ULT. PAGAMENTO:</label>
                                <div className='aberto-recebimento'>
                                    <EventAvailableIcon fontSize='small' />
                                    <input
                                        disabled={true}
                                        value={'20/11/2023'}
                                    />
                                </div>
                            </div>
                        </div>
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
                        {receberDisponivel ?
                            <>
                                <div className='pag-dupl-men'>
                                    <div className='duplica-adiciona-recebimento'>
                                        <div key={1} className='muda-linha-recebimento'>
                                            <div className='forma-pagamento-recebimento'>
                                                <label>Forma de Pagamento</label>
                                                <select
                                                    value={novaParcela.formaPagamento}
                                                    onChange={(e) => handleNovaParcelaChange('formaPagamento', e.target.value)}
                                                >
                                                    <option>Dinheiro</option>
                                                    <option>Débito</option>
                                                    <option>Crédito</option>
                                                    <option>PIX</option>

                                                    <option>Cheque</option>
                                                </select>
                                            </div>
                                            {['Dinheiro', 'Débito', 'Crédito'].includes(novaParcela.formaPagamento) ? null : (
                                                <div className='conta-bancaria-recebimento'>
                                                    <label>Conta</label>
                                                    <select
                                                        value={novaParcela.conta}
                                                        onChange={(e) => handleNovaParcelaChange('conta', e.target.value)}
                                                    >
                                                        <option>Conta 1</option>
                                                        <option>Conta 2</option>
                                                        <option>Conta 3</option>
                                                    </select>
                                                </div>
                                            )}
                                            <div className='conta-bancaria-recebimento'>
                                                <label>Valor a Pagar</label>
                                                <input
                                                    type='number'
                                                    value={novaParcela.valor}
                                                    onChange={(e) => handleNovaParcelaChange('valor', e.target.value)}
                                                />
                                            </div>
                                            <div className='adicionar-recebimento-forma'>
                                                <button onClick={handleAdicionarParcela}><AddCircleOutlineIcon fontSize={'small'} /></button>
                                            </div>

                                        </div>
                                        {parcelasAdicionais.length > 0 && (
                                            <div className='lista-parcelas'>
                                                <div>
                                                    {parcelasAdicionais.map((parcela, index) => (
                                                        <div className='container-linha-recebimento' key={index}>
                                                            <div className='tipo-pagamento-recebimento'>
                                                                <label>Tipo de Pagamento</label>
                                                                <div className='tipo-pagamento-2'>
                                                                    <CurrencyExchangeIcon fontSize={'small'} />
                                                                    <label>{parcela.formaPagamento}</label>
                                                                </div>
                                                            </div>
                                                            <div className='tipo-pagamento-recebimento-3'>
                                                                <h2> Valor $</h2>
                                                                <label>{parcela.valor}</label>


                                                            </div>
                                                            <div className='remove-forma-paga'>
                                                                <button onClick={() => handleRemoverParcela(index)}><CancelIcon/></button>
                                                            </div>

                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </>
                            : <></>
                        }
                        <div className='receber-add-recebimento'>
                            {receberDisponivel ? <>
                                <button onClick={handleReceber} disabled={!receberDisponivel}>RECEBER</button>

                            </> :
                                <></>
                            }

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
                                            <button onClick={() => imprimirComprovante()}>
                                                IMPRIMIR COMPROVANTE
                                            </button>
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
