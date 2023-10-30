import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { router  } from "@/routers";
import { socketPlugin } from "@/socket";


const app = new Elysia();
app.use(router);
app.use(socketPlugin);


// swagger
app.use(swagger({
  documentation: {
    info: {
      title: "API elysia",
      version: "0.0.1",
    },
    tags: [
      {name: "Auth"},
      {name: "Messages"}
    ]
  }
}));

// 
app.listen(3000, () => {
  console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
  );
});

