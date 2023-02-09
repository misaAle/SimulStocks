import { Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {
  const table = new Table(stack, "StockHoldings", {
    fields: {
        userId: "string",
        orderId: "string",
        ticker: "string",
        orderQuantity: "number",
        orderPrice: "number",
        orderDate: "string",
        userBalance: "number",
    },
    primaryIndex: {partitionKey: "userId", sortKey: "orderId"},
  });

  return {
    table,
  };
}