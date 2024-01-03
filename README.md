### Basic TRPC implementation in Vanilla TS

This is a basic implementation of a TRPC server and client in vanilla TS. It uses the [TRPC](https://trpc.io) library for the RPC implementation with type safety.

tRPC allows you to easily build & consume fully typesafe APIs without schemas or code generation. It's a tiny (~1.5kb) RPC library that works with any HTTP server framework. It's built with TypeScript and works great with Next.js, React, React Native, Solid, Vue, and more.

The server is a simple express server that exposes a single endpoint `/trpc` that the client can call. The client is a simple script that calls the server endpoint and logs the result to the console.

### How to run

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `ts-node src/server/server.ts` to start the server
4. Run `ts-node src/client/client.ts` to start the client
