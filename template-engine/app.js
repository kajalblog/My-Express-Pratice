import express from "express";
import { join } from "path";
const app = express();
const port = process.env.port || "4900";
// import stud from './routes/stud.js';
import stud from "./router/myrouter.js";

// app.set('view','./view');
app.set("views engine", "ejs");
app.use(express.static(join(process.cwd(), "public")));

app.use("/", stud);

app.listen(port, () => {
  console.log(`your app is running on ${port}`);
});
