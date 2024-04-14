import { fetchUsers, fetchPosts, fetchAlbums } from "./serviceApi";

export const serverDataMiddleware = async (req, _, next) => {
    const parts = req.url.split("/").filter((part) => part !== "");
    const userId = parts[0];
    const lastPart = parts[1];

    let data = [];

    if (req.url === "/") {
        data = await fetchUsers();
    } else if (lastPart === "posts") {
        data = await fetchPosts(userId);
    } else if (lastPart === "albums") {
        data = await fetchAlbums(userId);
    }

    req.serverData = data;
    next();
};
