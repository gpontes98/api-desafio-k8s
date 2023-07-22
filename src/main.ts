import * as dotenv from "dotenv";
import ExpressAdapter from "./application/adapters/ExpressAdapter";

// Infra
import ProbesController from "./infra/probes";

// Domain
import CarController from "./domain/car/CarController";

const server = new ExpressAdapter();

new ProbesController(server);
new CarController(server);

server.router([ProbesController, CarController]);

const PORT = Number(process.env.PORT) || 8000;

server.listen(PORT);
