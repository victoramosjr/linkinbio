import { Api, use} from "sst/constructs";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app}) {
    const { table } = use(StorageStack);

    // Create the API
    const api = new Api(stack, "Api", {
        defaults: {
            function: {
                bind: [table],
            },
        },
        routes: {
            "POST /links": "packages/functions/src/create.main",
            "GET /links/{id}": "packages/functions/src/get.main",
            "GET /links": "packages/functions/src/list.main",
            "PUT /links/{id}": "packages/functions/src/update.main",
            "DELETE /links/{id}": "packages/functions/src/delete.main",
        },
    });

    // Show the API endpoint in the output
    stack.addOutputs({
        ApiEndpoint: api.url,
    });

    // Return the API resource
    return {
        api,
    };
}