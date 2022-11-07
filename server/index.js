import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));