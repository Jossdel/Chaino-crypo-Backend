import express from "express";
import router from "./Routes/route.cryptos";

const app = express();
app.use(express.json());
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("API is running...");
});
app.use("/api", router);
const server: any = 3000;
app.listen(server, () => {
  console.log(`Server is running on port ${server}`);
});
