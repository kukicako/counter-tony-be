const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const ApplyRouter = require("./applications/apply-router.js")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/applications', ApplyRouter)

server.get("/", (req, res) => {
    res.send("hi hi hi")
})

module.exports = server;