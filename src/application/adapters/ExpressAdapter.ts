import express, { Request, Response } from "express";
import HttpServer from "../ports/HttpServer";

export default class ExpressAdapter implements HttpServer {
    server: any;

    constructor() {
        this.server = express();
        this.middleware();
    }

    listen(port: number): void {
        this.server.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    }

    private middleware() {
        this.server.use(express.json());
    }

    public router(route: any) {
        console.log(route);
        this.server.use(route);
    }

    async register(
        method: string,
        url: string,
        callback: Function
    ): Promise<void> {
        this.server[method](url, async function (req: Request, res: Response) {
            await callback(req, res);
        });
    }
}
