import express from 'express';
import { client } from '@repo/db/client';

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there")
})

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    // store this into db
    const user = await client.user.create({
        data: {
            username,
            password
        }
    })

    res.json({
        message: "User signup successful",
        id: user.id
    })
})

app.listen(3002, () => {
    console.log("App is listening on port: 3002")
})