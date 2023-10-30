import { Elysia } from 'elysia';
import { router as authRouter } from "@/routers/auth";
import { router as messagesRouter } from "@/routers/messages";

export const router = new Elysia({ prefix: "/api/v1"});

router.use(authRouter)
router.use(messagesRouter);