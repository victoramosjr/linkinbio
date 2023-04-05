import { Table } from "sst/node/table";
import handler from "@linkinbio/core/handler";
import dynamoDb from "@linkinbio/core/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: Table.Links.tableName,
    // 'Key' defines the partition key and sort key of the item to be removed
    Key: {
      userId: "123", // The id of the author
      linkId: event.pathParameters.id, // The id of the note from the path
    },
  };

  await dynamoDb.delete(params);

  return { status: true };
});