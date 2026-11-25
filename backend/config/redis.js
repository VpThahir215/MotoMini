import { createClient } from "redis";


const redisClient = createClient({
url: "redis://localhost:6379"
});

redisClient.on("error", (error) => {
    console.error("Redis connection error:", error);
});

redisClient.on("connect", () => {
    console.log("Connecting to Redis...");
});

redisClient.on("ready", () => {
    console.log("Redis is ready!");
});

export default redisClient;