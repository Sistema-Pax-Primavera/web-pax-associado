
import { Associado } from '../entities/class/associado';
import httpsInstance from './url';

export const useAssociado = () => {
    const https = httpsInstance()

    const getAssociados = async () =>
        https.get("/469bb88a-00b4-4960-8a19-c2bb10ec83b8")
            .then(({ data }) =>
                data.map((item) =>
                    Associado(item)
                )
            );

    return {
        getAssociados,
    }
}