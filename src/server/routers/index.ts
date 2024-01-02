import { t } from "../trpc";
import { userRouter } from "./users";

export const appRouter = t.router({
  hello: t.procedure.query(() => {
    return "Hello There!";
  }),
  logToServer: t.procedure
    .input((v) => {
      if (typeof v === "string") return v;

      throw new Error("Expected string!");
    })
    .mutation((req) => {
      console.log("Client says: " + req.input);
      return true;
    }),
  users: userRouter,
});

// export const mergedRouter = t.mergeRouters(appRouter, userRouter);
