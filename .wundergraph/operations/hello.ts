import {createOperation} from "../generated/wundergraph.factory";

export default createOperation.query({
    handler: async (ctx) => {
        return ctx.internalClient.queries.Dragons();
    }
})