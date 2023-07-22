import { Request, Response } from "express";
import { ParsedQs } from "qs";
import HttpServer from "../../application/ports/HttpServer";

export default class CarController {
	private readonly httpServer: HttpServer;

	constructor(httpServer: HttpServer) {
		this.httpServer = httpServer;
		this.routes();
	}

	async routes() {
		this.httpServer.register(
			"get",
			"/car",
			async (req: Request, res: Response) => {
				return await this.getCars(req.query, res);
			}
		);
	}

	getCars(queryParams: ParsedQs, response: Response) {
		try {
			if (queryParams.id) {
				return response
					.status(200)
					.json({ maker: "Fiat", model: "Toro", year: "2020" });
			} else {
				return response.status(200).json([
					{ maker: "Fiat", model: "Toro", year: "2020" },
					{ maker: "Hiunday", model: "i30", year: "2011" },
					{ maker: "Ford", model: "Ka", year: "2020" },
				]);
			}
		} catch (error) {
			console.log("Error getCars", error);
		}
	}
}
