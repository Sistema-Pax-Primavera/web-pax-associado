export function converterData(dateString) {
    if (!dateString) {
        return '';
    }
    const [year, month, day] = dateString.split('-');
    // Verifica se year, month e day não são nulos ou indefinidos antes de criar a formattedDate
    const formattedDate = (year && month && day) ? `${day}/${month}/${year}` : '';
    return formattedDate;
}

// Função para formatar um CPF
export function formatCPF(cpf) {
    const cpfDigits = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const formattedCPF = cpfDigits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return formattedCPF;
}

// Função para formatar um CEP
export function formatCEP(cep) {
    const cepDigits = cep.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const formattedCEP = cepDigits.replace(/(\d{5})(\d{3})/, '$1-$2');
    return formattedCEP;
}

// Função para formatar um número de telefone
export function formatarTelefone(telefone) {
    const numeroLimpo = telefone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (numeroLimpo.length === 10) {
        return `(${numeroLimpo.slice(0, 2)}) ${numeroLimpo.slice(2, 6)}-${numeroLimpo.slice(6)}`;
    } else if (numeroLimpo.length === 11) {
        return `(${numeroLimpo.slice(0, 2)}) ${numeroLimpo[2]} ${numeroLimpo.slice(3, 7)}-${numeroLimpo.slice(7)}`;
    } else {
        return telefone; // Retorna o número original se não for um número de telefone válido
    }
}
