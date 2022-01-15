import { createServer } from "miragejs";
import { items } from "./services/list";
import { camisetas } from "./services/1";
import { calças } from "./services/2";
import { tenis } from "./services/3";

export function makeServer({ environment = "production" } = {}) {
    let server = createServer({
        environment,

        routes() {
            this.namespace = "mock-api/V1";

            this.get("/categories/list", () => items);
            this.get("/categories/1", () => camisetas);
            this.get("/categories/2", () => calças);
            this.get("/categories/3", () => tenis);
        },
    });
    return server;
}
