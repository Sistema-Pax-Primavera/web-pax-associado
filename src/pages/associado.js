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

const clientes = [
    {
        "id": 1,
        "nome": "João Silva",
        "cpf": "12345678901",
        "contrato": 9876,
        "regiao": "BOLETO",
        "situacao": 1,
        "ult_pagamento": "10/10/2023"
    },
    {
        "id": 2,
        "nome": "Maria Oliveira",
        "cpf": "23456789012",
        "contrato": 6543,
        "regiao": "COB",
        "situacao": 2,
        "ult_pagamento": "15/09/2023"
    },
    {
        "id": 3,
        "nome": "Carlos Santos",
        "cpf": "34567890123",
        "contrato": 1234,
        "regiao": "BOLETO",
        "situacao": 3,
        "ult_pagamento": "22/08/2023"
    },
    {
        "id": 4,
        "nome": "Ana Lima",
        "cpf": "45678901234",
        "contrato": 5678,
        "regiao": "COB",
        "situacao": 1,
        "ult_pagamento": "05/07/2023"
    },
    {
        "id": 5,
        "nome": "Rafael Pereira",
        "cpf": "56789012345",
        "contrato": 4321,
        "regiao": "BOLETO",
        "situacao": 2,
        "ult_pagamento": "18/06/2023"
    },
    {
        "id": 6,
        "nome": "Fernanda Costa",
        "cpf": "67890123456",
        "contrato": 8765,
        "regiao": "COB",
        "situacao": 3,
        "ult_pagamento": "30/05/2023"
    },
    {
        "id": 7,
        "nome": "Lucas Oliveira",
        "cpf": "78901234567",
        "contrato": 9876,
        "regiao": "BOLETO",
        "situacao": 1,
        "ult_pagamento": "12/04/2023"
    },
    {
        "id": 8,
        "nome": "Isabela Rodrigues",
        "cpf": "89012345678",
        "contrato": 5432,
        "regiao": "COB",
        "situacao": 2,
        "ult_pagamento": "25/03/2023"
    },
    {
        "id": 9,
        "nome": "Gustavo Silva",
        "cpf": "90123456789",
        "contrato": 1234,
        "regiao": "BOLETO",
        "situacao": 3,
        "ult_pagamento": "08/02/2023"
    },
    {
        "id": 10,
        "nome": "Amanda Souza",
        "cpf": "01234567890",
        "contrato": 5678,
        "regiao": "COB",
        "situacao": 1,
        "ult_pagamento": "20/01/2023"
    }
];

function createData(id, contrato, nome, regiao, ult_pagamento, situacao) {
    return { id, contrato, nome, regiao, ult_pagamento, situacao };
}

const rows = clientes.map(cliente =>
    createData(cliente.id, cliente.contrato, cliente.nome, cliente.regiao, cliente.ult_pagamento, cliente.situacao)
);

const getSituacaoLabel = (situacao) => {
    switch (situacao) {
        case 1:
            return 'EM DIA';
        case 2:
            return 'EM ATRASO';
        case 3:
            return 'CANCELADO';
        default:
            return '';
    }
};

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
                    row.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                <div className='tabelas-associados'>
                    <TableContainer component={Paper} className="TableContainer">
                        <Table sx={{ maxWidth: 1100 }} aria-label='simple table'>
                            <TableHead className="TableHead">
                                <TableRow> 
                                    <TableCell align='center'>Contrato</TableCell>
                                    <TableCell align='center'>Nome</TableCell>
                                    <TableCell align='center'>Região</TableCell>
                                    <TableCell align='center'>Ultimo Pagamento</TableCell>
                                    <TableCell align='center'>Situação</TableCell>
                                    <TableCell align='center'>Opções</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="TableBody">
                                {searchResult.map((row) => (
                                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align='center'>{row.contrato}</TableCell>
                                        <TableCell align='center'>{row.nome}</TableCell>
                                        <TableCell align='center'>{row.regiao}</TableCell>
                                        <TableCell align='center'>{row.ult_pagamento}</TableCell>
                                        <TableCell align='center'>{getSituacaoLabel(row.situacao)}</TableCell>
                                        <TableCell align='center'>
                                            <div className='opcao-associado'>
                                                <button onClick={handleOpenButtonClick}>ABRIR</button>
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
