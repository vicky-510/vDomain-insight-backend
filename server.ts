import app from './app';
import { config} from './src/config/env'

const port = config.port || 5000;

const server = app.listen(port, () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr?.port}`;
    console.log(` App is running on ${bind}`);
    console.log(` Visit: http://localhost:${port}`);
  });