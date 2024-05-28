import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router-dom";
import ButtonText from "../../components/button-texto";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalAtendimento from "../../components/modal-atendimento";
import { useTelemarketing } from "../../services/api-telemarketing";
import { Box, Skeleton } from "@mui/material";
import Carregando from "../../components/carregando";


const Atendimento = () => {
    const location = useLocation();
    const cliente = location.state && location.state.cliente;
    const idioma = location.state && location.state.idioma;
    const { getTelemarketingID } = useTelemarketing();
    const [modalAtendimento, setModalAtendimento] = useState(false);
    const [selectedCliente, setSelectedCliente] = useState(null);
    const [loading, setLoading] = useState(true);
    const [atendimentoClose, setAtendimentoClose] = useState(true);

    const handleClose = () => {
        setModalAtendimento(false);
    };

    useEffect(() => {
        const fetchTelemarketingData = async () => {
            try {
                const data = await getTelemarketingID(cliente.id);
                setSelectedCliente(data);
                setModalAtendimento(true);
            } catch (err) {
                toast.error(err);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            }
        }
        fetchTelemarketingData();
    }, []);

    return (
        <>
            <div className="container-associados">
                <Header cliente={cliente} idioma={idioma} />
                <div className="dados-cobranca-associado">
                    {modalAtendimento != true && loading == false ?
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <label>Atendimento encerrado!</label>
                        </div>
                        : <></>
                    }
                    {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <div>
                                <Carregando message="Estamos conectando com o sistema de atendimento. Aguarde..." />
                            </div>
                        </div>
                    ) : (
                        modalAtendimento && (
                            <ModalAtendimento
                                onClose={handleClose}
                                clienteData={selectedCliente}
                                setAtendimentoClose={setAtendimentoClose}
                            />
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default Atendimento;
