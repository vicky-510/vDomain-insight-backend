import express from "express";
import domainRoutes from "./src/route/domain/domain.route";
import { errorHandler } from "./src/middleware/errorHandler";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/vwaran/v2', domainRoutes);
app.use(errorHandler);

export default app;
