import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
  data: {
    type: DataTypes.DATEONLY, 
    allowNull: false,
  },
  horario: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  titulo_do_jogo: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
}, {
  tableName: 'Bookings',  
  timestamps: true,  
});

export default Booking;
