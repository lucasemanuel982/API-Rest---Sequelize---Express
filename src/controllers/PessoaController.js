const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculasAtivas(req, res){
    const {estudante_id} = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasAtivasPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculas);
      
    } catch (erro) {
      return res.status(500).json({erro: erro.mesage});
      
    }
  }
  async pegaTodasMatriculas(req, res){
    const {estudante_id} = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaTodasMatriculasPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculas);
      
    } catch (erro) {
      return res.status(500).json({erro: erro.mesage});
      
    }
  }

  async cancelaRegistroEstudante (req, res) {
    const { estudante_id } = req.params;
    try {
      await pessoaServices.cancelaPessoaEMatriculas(Number(estudante_id));
      return res.status(200).json({ mensagem: `matrículas ref. estudante ${estudante_id} canceladas` });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

}

module.exports = PessoaController;