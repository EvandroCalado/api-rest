import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();

    return res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Faltando ID'] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({ errors: ['Aluno não existe'] });
      }

      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Faltando ID'] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({ errors: ['Aluno não existe'] });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.json(alunoAtualizado);
    } catch (error) {
      return console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Faltando ID'] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({ errors: ['Aluno não existe'] });
      }

      await aluno.destroy();

      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
