import Koa from "koa";
import cors from "@koa/cors";
import proxy from "koa-proxies";
const app = new Koa();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(
  proxy("/", {
    target: "http://bustime.mta.info/",
    changeOrigin: true,
    logs: true,
  })
);

app.listen(port);
console.log(`listening on port ${port}`);


