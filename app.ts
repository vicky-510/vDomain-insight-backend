import express from "express";
import domainRoutes from "./src/route/domain/domain.route";
import { errorHandler } from "./src/middleware/errorHandler";
import cors from 'cors';

const app = express();

// Allow all origins via cors
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

// Fallback CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Preflight
app.options('*', (req, res) => {
  res.sendStatus(200);
});

app.use(express.json());

// Trust reverse proxy
app.set('trust proxy', 1);


app.use('/vwaran/v2', domainRoutes);

app.get('/', (req, res) => {
    res.json({
      api: '🌐 vDomain-insight API',
      description: 'Fetch WHOIS information for any domain in real-time. Built with ❤️ using TypeScript, Node.js, and Express.',
      version: 'v2',
      usage: 'Append ?searchedDomain=yourdomain.com to the endpoint URL to get WHOIS data.',
      endpoints: {
        domainLookup: {
          method: 'GET',
          url: '/vwaran/v2/domain?searchedDomain=vwaran.tech',
          example: 'https://vdomain-insight.onrender.com/vwaran/v2/domain?searchedDomain=vwaran.tech',
          note: 'Returns WHOIS information for the specified domain'
        }
      },
      rateLimit: {
        info: 'Each IP is limited to 1 request per minute',
        status: '🕒 Rate limiting is active'
      },
      author: {
        name: 'Vigneshwaran M',
        email: 'vignesh510510@gmail.com',
        rights: 'All rights reserved.',
        github: 'https://github.com/vicky-510',
        website: 'vwaran.tech'
      },
      status: '✅ API is up and running'
    });
  });
  
  app.use(errorHandler);

export default app;
