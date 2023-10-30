import { t } from "elysia";

export const LoginFormDTO = t.Object({
    email: t.String(),
    password: t.String(),
});

export const SignupFormDTO = t.Object({
    email: t.String(),
    password: t.String(),
    confirm: t.String()
});