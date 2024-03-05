
import { Associado } from '../entities/class/associado';
import httpsInstance from './url';

export const useAssociado = () => {
    const https = httpsInstance()

    const getAssociados = async () =>
        https.get("/bb500c32-79fe-4b34-b490-3dcf05a730b3")
            .then(({ data }) =>
                data.map((item) =>
                    Associado(item)
                )
            );

    return {
        getAssociados,
    }
}