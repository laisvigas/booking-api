import express from 'express';
import Booking from '../models/Booking.js'; 

const router = express.Router();

// listar cadastros
router.get('/', async (req, res) => {
  try {
    const agendamentos = await Booking.findAll();
    res.status(200).json(agendamentos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter cadastros." });
  }
});

// obter cadastro pelo ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const agendamento = await Booking.findByPk(id);

    if (agendamento) {
      res.status(200).json(agendamento);
    } else {
      res.status(404).json({ message: "Cadastro não encontrado!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o cadastro." });
  }
});

// cadastrar 
router.post('/', async (req, res) => {
  const { nickname, data, horario, titulo_do_jogo } = req.body;  

  try {
    const newBooking = await Booking.create({ nickname, data, horario, titulo_do_jogo });  
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar." });
  }
});

// editar cadastro
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nickname, data, horario, titulo_do_jogo } = req.body;  

  try {
    const [updated] = await Booking.update(
      { nickname, data, horario, titulo_do_jogo },  
      { where: { id } }
    );

    if (updated) {
      const updatedAgendamento = await Booking.findByPk(id);
      res.status(200).json({
        message: "Cadastro atualizado com sucesso!",
        agendamento: updatedAgendamento,
      });
    } else {
      res.status(404).json({ message: "Cadastro não encontrado!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o cadastro." });
  }
});

// excluir cadastro
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Booking.destroy({ where: { id } });

    if (deleted) {
      res.status(200).json({ message: "Cadastro excluído com sucesso!" });
    } else {
      res.status(404).json({ message: "Cadastro não encontrado!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o cadastro." });
  }
});

export default router;
