import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routers";

const app = express();

app.use("/trpc", createExpressMiddleware({ router: appRouter }));

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});

export type AppRouter = typeof appRouter;
