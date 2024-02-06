import React, { useState } from 'react';
import Header from '../../components/header/header';
import './contato.css'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Contato = () => {
    const [contatos, setContatos] = useState([]);
    const [tipoContato, setTipoContato] = useState('Telefone');
    const [contatoValue, setContatoValue] = useState('');
    const [contatoEditando, setContatoEditando] = useState(null);

    const adicionarContato = () => {
        if (!contatoValue) {
            alert('Por favor, insira um contato.');
            return;
        }

        if (contatoEditando !== null) {
            // Se estiver editando, substituir o contato existente
            const contatosAtualizados = [...contatos];
            contatosAtualizados[contatoEditando] = {
                tipo: tipoContato,
                valor: contatoValue,
            };
            setContatos(contatosAtualizados);
            setContatoEditando(null);
        } else {
            // Adicionar novo contato
            const novoContato = {
                tipo: tipoContato,
                valor: contatoValue,
            };
            setContatos([...contatos, novoContato]);
        }

        // Limpar os campos
        setTipoContato('Telefone');
        setContatoValue('');
    };

    const editarContato = (index) => {
        // Preencher os campos de edição com os dados do contato selecionado
        const contatoSelecionado = contatos[index];
        setTipoContato(contatoSelecionado.tipo);
        setContatoValue(contatoSelecionado.valor);
        setContatoEditando(index);
    };

    const realizarAcaoContato = (tipo, valor) => {
        switch (tipo) {
            case 'Telefone':
                window.open(`tel:${valor}`, '_blank');
                break;
            case 'WhatsApp':
                window.open(`https://wa.me/${valor}`, '_blank');
                break;
            case 'Email':
                window.open(`mailto:${valor}`, '_blank');
                break;
            default:
                break;
        }
    };
    return (
        <>
            <div className='container-associados'>
                <Header />
                <div className='container-contato-associado'>
                    <div className='nome-contato-associado'>
                        <div className='icones-nome'>
                            <label><CallIcon fontSize={'small'} />Carlos Henrique Nº do Contrato - 789776 </label>
                        </div>
                        <div>
                            <div className='todos-contatos'>
                                <div className='container-linha'>
                                    <div className='campos-02-contato'>
                                        <label>Tipo de Contato</label>
                                        <select
                                            value={tipoContato}
                                            onChange={(e) => setTipoContato(e.target.value)}
                                        >
                                            <option>Telefone</option>
                                            <option>WhatsApp</option>
                                            <option>Email</option>
                                        </select>
                                    </div>
                                    <div className='campos-02-contato'>
                                        <label>Contato</label>
                                        <input
                                            value={contatoValue}
                                            onChange={(e) => setContatoValue(e.target.value)}
                                        />
                                    </div>
                                    <div className='button-contato'>
                                        <button onClick={adicionarContato}>ADICIONAR CONTATO</button>
                                    </div>
                                </div>
                                {contatos.map((contato, index) => (
                                    <div className='container-linha' key={index}>
                                        <div className='campos-02'>
                                            <label>{contato.tipo}</label>
                                            <input value={contato.valor} readOnly />
                                        </div>
                                        <div className='tipo-contato'>
                                            <button onClick={() => editarContato(index)}>
                                                <ModeEditIcon fontSize={'small'} />
                                            </button>
                                            {contato.tipo === 'WhatsApp' && (
                                                <button onClick={() => realizarAcaoContato('WhatsApp', contato.valor)}>
                                                    <WhatsAppIcon fontSize={'small'} />
                                                </button>
                                            )}
                                            {contato.tipo === 'Telefone' && (
                                                <button onClick={() => realizarAcaoContato('Telefone', contato.valor)}>
                                                    <CallIcon fontSize={'small'} />
                                                </button>
                                            )}
                                            {contato.tipo === 'Email' && (
                                                <button onClick={() => realizarAcaoContato('Email', contato.valor)}>
                                                    <EmailIcon fontSize={'small'} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Contato;
