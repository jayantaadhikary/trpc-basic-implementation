import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server/server";

const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: "http://localhost:5000/trpc" })],
});

async function main() {
  client.logToServer.mutate("Hello from client!");

  const result = await client.hello.query();
  console.log(result);

  const userData = await client.users.getUser.query();
  console.log(userData);
}

main();
