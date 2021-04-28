import express, { Application } from 'express';
import morgan from 'morgan';
// Routes
import IndexRoutes from './routes/index.routes';
import ProspectsRoutes from './routes/prospects.routes';

export class App {
    private app: Application

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middleware();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env || 3000);
    }

    private middleware() {
        this.app.use(morgan('dev'));
    }

    private routes() {
        this.app.use(express.json());
        this.app.use(IndexRoutes);
        this.app.use('/prospectos', ProspectsRoutes);
    }

    public async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port ', this.app.get('port'));
    }


}