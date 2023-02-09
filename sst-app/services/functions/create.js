import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";

export const main = handler(async (event) => {
  // const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      userId: "123",
      orderId: "1",
      ticker: "$APPL",
      orderQuantity: "2",
      orderPrice: "231",
      orderDate: "02-07-20223",
      userBalance: "538",
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});