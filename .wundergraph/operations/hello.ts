import {createOperation} from "../generated/wundergraph.factory";

export default createOperation.query({
    handler: async (ctx) => {
        console.log("hello123")
        return ctx.internalClient.queries.Dragons();
    }
})