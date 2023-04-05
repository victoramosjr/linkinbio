import { Bucket, Table } from "sst/constructs";

export function StorageStack({ stack, app }) {
    // Create an S3 bucket
    const bucket = new Bucket(stack, "Uploads");

    // Create DynamoDB table
    const table = new Table(stack, "Links", {
        fields: {
            userId: "string",
            linkId: "string",
        },
        primaryIndex: { partitionKey: "userId", sortKey: "linkId" },
    });

    return {
        table,
        bucket,
    };
}