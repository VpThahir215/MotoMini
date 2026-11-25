
import redisClient from "../config/redis.js";

const clearProductCache = async () => {
    const keys = [];

    for await (const key of redisClient.scanIterator({
        MATCH: "products:*",
        COUNT: 100
    })) {
        keys.push(key);
    }

    // Check whether matching keys exist
    if (keys.length === 0) {
        console.log("No product cache keys found");
        return;
    }

    // Delete all matching keys
  await redisClient.del(...keys);

    console.log("Product cache cleared successfully");
};

export default clearProductCache;
