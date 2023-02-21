import {createOperation} from "../generated/wundergraph.factory";

export default createOperation.query({
    handler: async (ctx) => {
        console.log("Hello, World!")
        return ctx.internalClient.queries.Dragons();
    }
})