const baseUrl = "http://localhost:8000/";

async function checkAuth() {
    try {
        const res = await fetch(baseUrl + "user/me");
        if (res.json.results.length)
            return true;
        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
}