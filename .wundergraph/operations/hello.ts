import {createOperation} from "../generated/wundergraph.factory";

export default createOperation.query({
    handler: async (ctx) => {
        console.log("hello")
        return ctx.internalClient.queries.Dragons();
    }
})