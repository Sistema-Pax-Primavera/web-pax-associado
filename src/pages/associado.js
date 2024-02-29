import React, { useState, useEffect } from 'react';
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
import idiomas from '../utils/info';

const clientes = [
    {
        "id": 1,
        "nome": "João Silva",
        "cpf": "12345678901",
        "contrato": 9876,
        "regiao": "BOLETO",
        "situacao": 1,
        "tipo": "TITULAR",
        "ult_pagamento": "10/10/2023",
        "dependente": "ADERBAL"
    },
    {
        "id": 2,
        "nome": "Maria Oliveira",
        "cpf": "23456789012",
        "contrato": 6543,
        "regiao": "COB",
        "situacao": 2,
        "tipo": "TITULAR",
        "ult_pagamento": "15/09/2023",
        "dependente": "ADERBAL"
    },
    {
        "id": 3,
        "nome": "Carlos Santos",
        "cpf": "34567890123",
        "contrato": 1234,
        "regiao": "BOLETO",
        "situacao": 3,
        "tipo": "TITULAR",
        "ult_pagamento": "22/08/2023",
        "dependente": "ADERBAL"
    },
    {
        "id": 4,
        "nome": "Ana Lima",
        "cpf": "45678901234",
        "contrato": 5678,
        "regiao": "COB",
        "situacao": 1,
        "tipo": "DEPENDENTE",
        "ult_pagamento": "05/07/2023",
        "dependente": "-"
    },
    {
        "id": 5,
        "nome": "Rafael Pereira",
        "cpf": "56789012345",
        "contrato": 4321,
        "regiao": "BOLETO",
        "situacao": 2,
        "tipo": "TITULAR",
        "ult_pagamento": "18/06/2023",
        "dependente": "-"
    },
    {
        "id": 6,
        "nome": "Fernanda Costa",
        "cpf": "67890123456",
        "contrato": 8765,
        "regiao": "COB",
        "situacao": 3,
        "tipo": "TITULAR",
        "ult_pagamento": "30/05/2023",
        "dependente": "ADERBAL"
    },
    {
        "id": 7,
        "nome": "Lucas Oliveira",
        "cpf": "78901234567",
        "contrato": 9876,
        "regiao": "BOLETO",
        "situacao": 1,
        "tipo": "TITULAR",
        "ult_pagamento": "12/04/2023",
        "dependente": "ADERBAL"
    },
    {
        "id": 8,
        "nome": "Isabela Rodrigues",
        "cpf": "89012345678",
        "contrato": 5432,
        "regiao": "COB",
        "situacao": 2,
        "tipo": "TITULAR",
        "ult_pagamento": "25/03/2023",
        "dependente": " - "
    },
    {
        "id": 9,
        "nome": "Gustavo Silva",
        "cpf": "90123456789",
        "contrato": 1234,
        "regiao": "BOLETO",
        "situacao": 3,
        "tipo": "TITULAR",
        "ult_pagamento": "08/02/2023",
        "dependente": "ADERBAL"
    },
    {
        "id": 10,
        "nome": "Amanda Souza",
        "cpf": "01234567890",
        "contrato": 5678,
        "regiao": "COB",
        "situacao": 1,
        "tipo": "DEPENDENTE",
        "ult_pagamento": "20/01/2023",
        "dependente": "ADERBAL"
    }
];

function createData(id, contrato, cpf, tipo, nome, regiao, ult_pagamento, dependente, situacao) {
    return { id, contrato, cpf, tipo, nome, regiao, ult_pagamento, dependente, situacao };
}

const rows = clientes.map(cliente =>
    createData(
        cliente.id, cliente.contrato, cliente.cpf,
        cliente.tipo, cliente.nome, cliente.regiao,
        cliente.ult_pagamento, cliente.dependente, cliente.situacao)
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

const formatarCPF = (cpf) => {
    // Adapte conforme necessário para o formato desejado
    const parteVisivel = cpf.substring(0, 3); // Primeiros 5 dígitos visíveis
    const parteOculta = '.***.***'; // Parte oculta
    const ultimosDigitos = cpf.substring(9); // Últimos 2 dígitos visíveis
    return `${parteVisivel}${parteOculta}-${ultimosDigitos}`;
};

const Associado = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [showImage, setShowImage] = useState(true);
    const navigate = useNavigate();
    const [idioma, setIdioma] = useState(false);
    const [isIdioma, setIsIdioma] = useState(true);

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

    const handleOpenButtonClick = (cliente) => {
        setShowImage(true);
        setSearchResult([]);
        setSearchTerm('');
        navigate('/dados-cadastrais', { state: { cliente } })
        localStorage.setItem('page-associado', '/dados-cadastrais');
        // localStorage.setItem('clienteSelecionado', JSON.stringify(cliente));
    };

    useEffect(() => {
        const savedUsuario = localStorage.getItem("usuario");
        if (savedUsuario) {
            const usuarioObj = JSON.parse(savedUsuario);
            setIdioma(usuarioObj.idioma == 'BR' ? false : true);
        }
    }, []);

    const verificaIdioma = () => {
        const savedUsuario = localStorage.getItem("usuario");
        if (savedUsuario) {
            const usuarioObj = JSON.parse(savedUsuario)
            setIdioma(usuarioObj.idioma === 'BR' ? false : true);
        }

        setIsIdioma(false)
    }

    const TableIdioma = idiomas[idioma ? 'es_PY' : 'pt_BR'].table;
    const colunas = Object.keys(TableIdioma);

    useEffect(() => {
        const intervalId = setInterval(verificaIdioma, 100);

        // Certificar-se de limpar o intervalo quando o componente for desmontado
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='container-associado'>
            <div className='pesquisa-associado'>
                <input
                    placeholder={idioma ? idiomas.es_PY.pesquisa.texto : idiomas.pt_BR.pesquisa.texto}
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
                    <p>{idioma ? 'Cargando' : 'Carregando'}...</p>
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
                        <Table aria-label='simple table'>
                            <TableHead className="TableHead">
                                <TableRow>
                                    {colunas.map((coluna) => (
                                        <TableCell align='center' key={coluna}>{TableIdioma[coluna]}</TableCell>
                                    ))}
                                    {/* <TableCell align='center'>Contrato</TableCell>
                                    <TableCell align='center'>Nome</TableCell>
                                    <TableCell align='center'>CPF</TableCell>
                                    <TableCell align='center'>Tipo</TableCell>
                                    <TableCell align='center'>Região</TableCell>
                                    <TableCell align='center'>Ultimo Pagamento</TableCell>
                                    <TableCell align='center'>Dependente</TableCell>
                                    <TableCell align='center'>Situação</TableCell>
                                    <TableCell align='center'>Opções</TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody className="TableBody">
                                {searchResult.map((row) => (
                                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align='center'>{row.contrato}</TableCell>
                                        <TableCell align='center'>{row.nome}</TableCell>
                                        <TableCell align='center'>{formatarCPF(row.cpf)}</TableCell>
                                        <TableCell align='center'>{row.tipo}</TableCell>
                                        <TableCell align='center'>{row.regiao}</TableCell>
                                        <TableCell align='center'>{row.ult_pagamento}</TableCell>
                                        <TableCell align='center'>{row.dependente}</TableCell>
                                        <TableCell align='center'>{getSituacaoLabel(row.situacao)}</TableCell>
                                        <TableCell align='center'>
                                            <div className='opcao-associado'>
                                                <button onClick={() => handleOpenButtonClick(row)}>
                                                    {idioma ? idiomas.es_PY.botaoTable.texto : idiomas.pt_BR.botaoTable.texto}
                                                </button>
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
