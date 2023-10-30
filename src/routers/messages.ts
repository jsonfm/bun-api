import { Elysia } from 'elysia';

const tags = { detail: { tags: ["Messages"] } };

export const router = new Elysia({ prefix: "/messages"});

router.get("/", (context) => {
    return "messagse";
}, tags);

router.get("/{message_id}", (context) => {
    return "message id";
}, tags);