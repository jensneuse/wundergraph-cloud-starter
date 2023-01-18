import {createOperation} from "../generated/wundergraph.factory";

export default createOperation.query({
    handler: async (ctx) => {
        return {
            hello: "world"
        };
    }
})