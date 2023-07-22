import { Request, Response, response } from "express";
import HttpServer from "../application/ports/HttpServer";

export default class ProbesController {
	private readonly httpServer: HttpServer;

	constructor(httpServer: HttpServer) {
		this.httpServer = httpServer;
		this.routes();
	}

	async routes() {
		this.httpServer.register(
			"get",
			"/health",
			async (req: Request, res: Response) => {
				return res.status(200).json({ status: "OK" });
			}
		);

		this.httpServer.register(
			"get",
			"/ready",
			async (req: Request, res: Response) => {
				return res.status(200).json({ status: "OK" });
			}
		);

		this.httpServer.register(
			"get",
			"/startup",
			async (req: Request, res: Response) => {
				return res.status(200).json({ status: "OK" });
			}
		);
	}
}
