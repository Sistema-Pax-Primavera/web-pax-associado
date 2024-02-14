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
import PrintIcon from '@mui/icons-material/Print';
import { Select } from '@mui/material';
import { useLocation } from 'react-router-dom';

function createData(id, parcela, vencimento, valor, status) {
    return { id, parcela, vencimento, valor, status };
}

const rows = [
    createData(1, '10/02/2024', 90, 'ABERTA',),
    createData(1, '12/02/2024', 90, 'FECHADA',),
];


function extra(id, valor, mes, formapagamento) {
    return { id, valor, mes, formapagamento };
}

const extrato = [
    extra(50, '05/02/2023', 'DINHEIRO'),
    extra(50, '05/03/2023', 'DINHEIRO'),
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

const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: 5,
    p: 4,
};

const style3 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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

    return (
        <>
            <div className='container-associados'>
                <Header cliente={cliente} />
                <div className='container'>
                    <MyAccordion
                        title={`${cliente ? cliente.nome : ''} Nº do Contrato - ${cliente ? cliente.contrato : ''}`}
                        icon={<AccountCircleIcon />}
                        expandedIcon={<ExpandMoreIcon />}
                    >
                        <div className='divisao-align-itens'>
                            <div className='divisao-flex-direction'>
                                <button onClick={handleOpen}><AddchartIcon fontSize={'small'} /> EXTRATO</button>

                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            <div className='icones-nome-fechar'>
                                                <div className='pdr-icones'>
                                                    <label><AddchartIcon fontSize={'small'} />EXTRATO</label>
                                                </div>
                                                <div className='fecha-modal'>
                                                    <button onClick={handleClose}><CancelIcon fontSize={'small'} /></button>
                                                </div>

                                            </div>
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <div>
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
                                                <div className='imprimir-anual'>
                                                    <button>IMPRIMIR ANUAL</button>
                                                </div>
                                            </div>
                                        </Typography>
                                    </Box>
                                </Modal>
                                <button onClick={handleOpen1}><CurrencyExchangeIcon fontSize={'small'} /> QUITAR</button>
                                <Modal
                                    open={open1}
                                    onClose={handleClose1}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style2}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">

                                            <div className='icones-nome-fechar'>
                                                <div className='pdr-icones'>
                                                    <label><AddchartIcon fontSize={'small'} />QUITAR</label>
                                                </div>
                                                <div className='fecha-modal'>
                                                    <button onClick={handleClose1}><CancelIcon fontSize={'small'} /></button>
                                                </div>

                                            </div>
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <div className='quitar-pdr'>
                                                <div className='quitar-01'>
                                                    <label>Data</label>
                                                    <input></input>
                                                </div>
                                                <div className='quitar-02'>
                                                    <label>Motivo da Quitação</label>
                                                    <select></select>
                                                </div>
                                                <div className='confirmar-quitacao'>
                                                    <button>CONFIRMAR</button>
                                                </div>
                                            </div>


                                        </Typography>
                                    </Box>
                                </Modal>
                                <button onClick={handleOpen2}><CreditScoreIcon fontSize={'small'} /> NEGOCIAR</button>
                                <Modal
                                    open={open2}
                                    onClose={handleClose2}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style3}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">

                                            <div className='icones-nome-fechar'>
                                                <div className='pdr-icones'>
                                                    <label><CreditScoreIcon fontSize={'small'} />NEGOCIAR</label>
                                                </div>
                                                <div className='fecha-modal'>
                                                    <button onClick={handleClose2}><CancelIcon fontSize={'small'} /></button>
                                                </div>

                                            </div>
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <div className='negociar-pdr'>
                                                <div className='container-linha'>
                                                    <div className='campos-necociacao'>
                                                        <label>Quant. Parcelas</label>
                                                        <input></input>
                                                    </div>
                                                    <div className='campos-necociacao2'>
                                                        <label>Motivo da Negociação</label>
                                                        <select></select>
                                                    </div>
                                                </div>

                                                <div className='container-linha'>
                                                    <div className='campos-necociacao'>
                                                        <label>Valor Total</label>
                                                        <input></input>
                                                    </div>
                                                    <div className='campos-necociacao'>
                                                        <label>Valor Acertado</label>
                                                        <input></input>
                                                    </div>
                                                    <div className='confirmar-tipo-negociacao'>
                                                        <button>CONFIRMAR</button>
                                                    </div>
                                                </div>




                                            </div>
                                        </Typography>
                                    </Box>
                                </Modal>
                                <button onClick={handleOpen3}><CancelIcon fontSize={'small'} /> CANCELAR</button>
                                <Modal
                                    open={open3}
                                    onClose={handleClose3}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style2}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">

                                            <div className='icones-nome-fechar'>
                                                <div className='pdr-icones'>
                                                    <label><CancelIcon fontSize={'small'} />CANCELAR</label>
                                                </div>
                                                <div className='fecha-modal'>
                                                    <button onClick={handleClose3}><CancelIcon fontSize={'small'} /></button>
                                                </div>

                                            </div>
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <div className='quitar-pdr'>
                                                <div className='quitar-01'>
                                                    <label>Data</label>
                                                    <input></input>
                                                </div>
                                                <div className='quitar-02'>
                                                    <label>Motivo do Cancelamento</label>
                                                    <select></select>
                                                </div>
                                                <div className='confirmar-tipo-negociacao'>
                                                    <button>CONFIRMAR</button>
                                                </div>
                                            </div>


                                        </Typography>
                                    </Box>
                                </Modal>
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
                                    <div className='data-contrato'>
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
                    <MyAccordion
                        title="Historico de F9"
                        icon={<AnalyticsIcon />}
                        expandedIcon={<ExpandMoreIcon />}
                    >
                        <div className='layout-linha'>

                            <div className='container-linha'>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Data</TableCell>
                                                <TableCell align="center">Titulo</TableCell>
                                                <TableCell align="center">Categoria</TableCell>
                                                <TableCell align="center">Subcategoria</TableCell>
                                                <TableCell align="center">Usuario</TableCell>
                                                <TableCell align="center">Mensagem</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    10/02/2024
                                                </TableCell>
                                                <TableCell align="center">CONTATO COM CLIENTE</TableCell>
                                                <TableCell align="center">PROMOÇÃO</TableCell>
                                                <TableCell align="center">PROMOÇÃO ANUAL</TableCell>
                                                <TableCell align="center">ADMIN</TableCell>
                                                <TableCell align="center">Texto texto texto texto texto
                                                    texto texto texto texto texto texto texto texto texto
                                                    texto
                                                    texto texto texto texto texto</TableCell>
                                            </TableRow>

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


