const app = require("./src/routes/index");
const port = 3000;
const { connectTodB } = require("./src/services/db/connection.js");

startServer()

function startServer() {
    connectTodB();
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}
