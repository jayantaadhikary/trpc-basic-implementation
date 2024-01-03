import express from "express";
import path from "path";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routers";
import { createContext } from "./context";

const app = express();

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});

export type AppRouter = typeof appRouter;
