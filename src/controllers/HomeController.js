import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Elaynne',
      sobrenome: 'Cristina',
      email: 'elaynne@gmail.com',
      idade: 37,
      peso: 70,
      altura: 1.65,
    });
    return res.json(novoAluno);
  }
}

export default new HomeController();
