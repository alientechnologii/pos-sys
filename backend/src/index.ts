import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'POS-SYS Backend is running' });
});

// Test database connection
app.get('/api/db-check', async (req: Request, res: Response) => {
  try {
    await sequelize.authenticate();
    res.json({ status: 'OK', message: 'Database connection successful' });
  } catch (error) {
    res.status(500).json({ status: 'ERROR', message: 'Database connection failed', error });
  }
});

// Start server
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📊 Database synced successfully`);
    });
  })
  .catch((error) => {
    console.error('❌ Failed to sync database:', error);
    process.exit(1);
  });

export default app;
