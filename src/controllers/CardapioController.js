// src/controllers/CardapioController.js
const { cardapioOficial } = require('../models/CardapioModel');

const listarCardapio = (req, res) => {
    console.log("[LOG] Alguém solicitou o cardápio oficial no servidor.");

    // Devolvemos o Status 200 (OK) e o pacote JSON com os dados
    return res.status(200).json({
        sucesso: true,
        quantidade_itens: cardapioOficial.length,
        dados: cardapioOficial
    });
};

const buscaPorId = (req, res) => {
    const id = parseInt(req.perams.id)
    const itemEncontrado = cardapioOficial.find((item) => item.id === id)

    return res.status(200).json({
        erro: false,
        sucesso: "Item foi encontrado, e esse valor é ",
        item: itemEncontrado
    })
    if (!itemEncontrado) {
        return res.status(400).json({
            erro: "Erro 400!",
            sucesso: false
        })
    }
}

module.exports = { listarCardapio, buscaPorId };