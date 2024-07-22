import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import mailRouter from "./Routers/Mail.router.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).send("App is working fine");
})

app.use('/api/mail', mailRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is runner on port $PORT`)
});
