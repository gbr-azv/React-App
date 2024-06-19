// src/utils/format.js

/**
 * Determina se a query ao Endpoint da API é de categoria ou nome/descrição
 * @param {string} query - A Query a ser analisada
 * @returns {boolean} - O resultado [true/false] do objetivo da Query
 */
export const isCategory = (query) => {
    // Determina se a query ao Endpoint da API é de categoria ou nome/descrição
    const categories = ["hamburguer", "sushi", "massas", "drinks"];
    return categories.includes(query);
};
