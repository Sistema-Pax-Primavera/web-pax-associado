import React, { useState } from 'react';
import './associado.css';
import Pesquisar from '../../assets/pesquisar.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


function createData(name, cpf, numerocontrato, cidade, telefone) {
    return { name, cpf, numerocontrato, cidade, telefone };
}

const rows = [
    createData('Carlos Henrique', '06777303146', '12345', 'Dourados', '671234567'),
    createData('Diogo', 'Ponta Porã', '51902630106', '54321', '6778945612'),
];

const Associado = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [showImage, setShowImage] = useState(true);
    const navigate = useNavigate();

    const handleSearch = () => {
        setLoading(true);
        setTimeout(() => {
            const result = rows.filter(
                (row) =>
                    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    row.cpf.includes(searchTerm) ||
                    row.numerocontrato.includes(searchTerm)
            );

            setLoading(false);
            setSearchResult(result);

            if (result.length === 0) {
                toast.warning('Associado não encontrado.');
                setShowImage(true);
            } else {
                setShowImage(false);
            }
        }, 3000);
    };

    const handleOpenButtonClick = () => {
        setShowImage(true);
        setSearchResult([]);
        setSearchTerm('');
        navigate('/dados-cadastrais')
        localStorage.setItem('page-associado', '/dados-cadastrais')
    };

    return (
        <div className='container-associado'>

            <div className='pesquisa-associado'>
                <input
                    placeholder='Informe o Nome, CPF ou Nº de Contrato'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>
                    <SearchIcon fontSize={'small'} />
                </button>
            </div>
            <ToastContainer />
            {loading && (
                <div className='loading-associado'>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress color='success' />
                    </Box>
                    <p>Carregando...</p>
                </div>
            )}
            {showImage && !loading && searchResult.length === 0 && (
                <div className='imagem-pesquisar-associado'>
                    <img src={Pesquisar} alt='Pesquisar' />
                </div>
            )}
            {!loading && searchResult.length > 0 && (
                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome</TableCell>
                                    <TableCell align='center'>CPF</TableCell>
                                    <TableCell align='center'>Contrato</TableCell>
                                    <TableCell align='center'>Cidade</TableCell>
                                    <TableCell align='center'>Telefone</TableCell>
                                    <TableCell align='left'>Opções</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {searchResult.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component='th' scope='row'>
                                            {row.name}
                                        </TableCell>
                                        <TableCell align='center'>{row.cpf}</TableCell>
                                        <TableCell align='center'>{row.numerocontrato}</TableCell>
                                        <TableCell align='center'>{row.cidade}</TableCell>
                                        <TableCell align='center'>{row.telefone}</TableCell>
                                        <TableCell align='right'>
                                            <div className='opcao-associado'>
                                                <button onClick={handleOpenButtonClick}>ABRIR </button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )}
        </div>
    );
};

export default Associado;
