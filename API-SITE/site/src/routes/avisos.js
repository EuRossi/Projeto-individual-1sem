var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listarResposta", function (req, res) {
    avisoController.listarResposta(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.post("/publicarResposta/:idUsuario", function (req, res) {
    avisoController.publicarResposta(req, res);
});

router.put("/editar", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idPublicacao", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;