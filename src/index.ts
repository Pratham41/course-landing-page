import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan"
import app from "./app";
import { userRouter } from "../src/routes/user.routes";

dotenv.config();

app.use(cors());

app.use(morgan("dev"))

app.use("/api/v1/users", userRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
