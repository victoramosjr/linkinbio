import { Bucket, Table } from "sst/constructs";

export function StorageStack({ stack, app }) {
    // Create an S3 bucket
    const bucket = new Bucket(stack, "Uploads");

    // Create DynamoDB table
    const table = new Table(stack, "LinkInBio", {
        fields: {
            userId: "string",
            postId: "string",
        },
        primaryIndex: { partitionKey: "userId", sortKey: "postId" },
    });

    return {
        table,
        bucket,
    };
}