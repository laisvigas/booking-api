import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/agendamentos', bookingRoutes);

const PORT = process.env.PORT || 3001;

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado.');
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));
