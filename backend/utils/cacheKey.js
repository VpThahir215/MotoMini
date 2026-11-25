
const createProductCacheKey = (query) => {

    const sortedQuery = Object.keys(query)
        .filter((key) => query[key] !== undefined && query[key] !== null && query[key] !== "")
        .sort()
        .map((key) => `${key}=${query[key]}`)
        .join(":");

    return `products:${sortedQuery || "all"}`;
};

export default createProductCacheKey;
