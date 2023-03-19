import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`webzap.me rodando na porta: ${PORT}`));
