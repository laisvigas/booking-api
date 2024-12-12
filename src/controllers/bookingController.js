import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  try {
    const { nickname, data, horario, titulo_do_jogo } = req.body;  
    const booking = await Booking.create({ nickname, data, horario, titulo_do_jogo }); 
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar cadastro.' });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar cadasrtos.' });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { nickname, data, horario, titulo_do_jogo } = req.body; 
    const booking = await Booking.findByPk(id);

    if (!booking) return res.status(404).json({ error: 'Cadastro não encontrado.' });

    await booking.update({ nickname, data, horario, titulo_do_jogo });  
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar cadastro.' });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByPk(id);

    if (!booking) return res.status(404).json({ error: 'Cadastro não encontrado.' });

    await booking.destroy();
    res.json({ message: 'Cadastro excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir cadastro.' });
  }
};
