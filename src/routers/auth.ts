import { Elysia } from 'elysia';
import { LoginFormDTO } from "@/schemas/auth/forms";

const tags = { detail: { tags: ["Auth"] } };
export const router = new Elysia({ prefix: "/auth"});


router.get("/", ({ body }) => {
    return "users";
}, {
    body: LoginFormDTO,
    ...tags
});