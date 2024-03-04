
import { Associado } from '../entities/class/associado';
import httpsInstance from './url';

export const useAssociado = () => {
    const https = httpsInstance()

    const getAssociados = async () =>
        https.get("/e54cbe19-03a5-4cc6-ac98-67402584294f")
            .then(({ data }) =>
                data.map((item) =>
                    Associado(item)
                )
            );

    return {
        getAssociados,
    }
}