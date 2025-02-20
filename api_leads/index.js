import { express } from "express";
import { validaUsuario } from "./validacao/valida.js";

const app = express();
app.use(express.json());

app.const('usuarios', async (req, res) => {
    const {nome, email, telefone} = req.body;

    const usuarioValido = validaUsuario(nome, email, telefone);

    if (usuarioValido.status) {
        await cadastroUsuario(nome, email, telefone);
        res.status(202).end();
    } else {
        res.status(400).send({mensagem: usuarioValido.mensagem});
    }
})

app.listen(9000, async () => {
    
})