import express from "express";
import redisClient from "../config/redis.js";

const routerRdis = express.Router();

// Store datal
routerRdis.get("/set", async (req, res) => {
    await redisClient.set("bike", "Kawasaki Ninja", {
        EX: 60
    });

    res.json({
        message: "Data stored in Redis"
    });
});

// Retrieve data
routerRdis.get("/get", async (req, res) => {
    const bike = await redisClient.get("bike");

    res.json({
        bike
    });
});

// Delete data
routerRdis.get("/delete", async (req, res) => {
    await redisClient.del("bike");

    res.json({
        message: "Data deleted"
    });
});

export default routerRdis;