import { StackContext, Api } from "@serverless-stack/resources";

const function2 = async () => {
}

const function1 = async () => {
  await function2();
}

export async function MyStack({ stack }: StackContext) {
  await function1();

  const api = new Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
