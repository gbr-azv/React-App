// src/utils/format.js

/**
 * Converte um número de formato decimal para formato brasileiro.
 * @param {number} price - O preço a ser formatado.
 * @returns {string} - O preço formatado com vírgula e símbolo BRL.
 */
export const formatPrice = (price) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
};
