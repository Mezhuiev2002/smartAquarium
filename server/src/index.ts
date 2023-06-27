import express from 'express'
import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import fs from 'fs';
import { format } from 'date-fns';

const app = express()

app.use(cors({
    credentials: true
}))
app.use(compression())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
    console.log("Server start on port 8080")
})

app.post("/data", (req: express.Request, res: express.Response)=>{
    try {
        const value = req.body;

        const jsonValue = JSON.stringify(value);
        console.log(jsonValue);
        fs.writeFile('./test.json', jsonValue, (err: any) => {
           if(err) {
            console.log("error occured")
            res.status(500)
           } else {
            console.log("bomba")
            res.status(200)
           }
        })



        console.log('Received data:', value);
        res.json(
            {
                message: 'misha krasava'
            }
        )
    } catch (err) {
        console.log(err)
        res.status(500).json(
            {
                message: "Error occured"
            }
        )
    }
})

app.post("/setfood", (req: express.Request, res: express.Response)=>{
    try {
        const value = req.body;
        console.log(value);
        const jsonValue = JSON.stringify(value);
        console.log(jsonValue);
        fs.writeFile('./feed.json', jsonValue, (err: any) => {
           if(err) {
            console.log("error occured")
            res.status(500)
           } else {
            console.log("bomba")
            res.status(200)
           }
        })



        console.log('Received data:', value);
        res.json(
            {
                message: 'misha molodec'
            }
        )
    } catch (err) {
        console.log(err)
        res.status(500).json(
            {
                message: "Error occured"
            }
        )
    }
})

app.get("/getdata", (req: express.Request, res: express.Response) => {
    try {
        fs.readFile('./test.json', 'utf-8', (err, value) => {
            if (err) {
                console.log("Error getting data");
                res.status(500).json({ message: "Polomka" })
            } else {
                const jsonValue = JSON.parse(value)
                res.json(jsonValue)
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(
            {
                message: "Error occured"
            }
        )
    }
})

app.get("/getfood", (req: express.Request, res: express.Response) => {
    try {
        fs.readFile('./feed.json', 'utf-8', (err, value) => {
            if (err) {
                console.log("Error getting data");
                res.status(500).json({ message: "Polomka" })
            } else {
                // const currentTime = format(new Date(), 'HH:mm');
                const jsonValue = JSON.parse(value)
                jsonValue.currentTime = format(new Date(), 'HH:mm')
                res.json(jsonValue)
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(
            {
                message: "Error occured"
            }
        )
    }
})