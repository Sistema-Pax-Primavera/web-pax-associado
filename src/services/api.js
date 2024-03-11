
import { Associado } from '../entities/class/associado';
import httpsInstance from './url';

export const useAssociado = () => {
    const https = httpsInstance()

    const getAssociados = async () =>
        https.get("/4042eb75-7d7d-4695-a14a-c9a51e959bde")
            .then(({ data }) =>
                data.map((item) =>
                    Associado(item)
                )
            );

    const getAssociadoID = async (id) => {
        const response = await https.get("/4042eb75-7d7d-4695-a14a-c9a51e959bde");
        const filteredData = response.data.filter((item) => item.unidadeId === id);
        const mappedData = filteredData.map((filteredItem) => Associado(filteredItem));
        return mappedData;
    };

    return {
        getAssociados,
        getAssociadoID
    }
}