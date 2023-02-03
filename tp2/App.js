const app = require("../Mayel_MALEBE_TP2/src/routes/index.js");
const port = 3000;
const { connectTodB } = require("../Mayel_MALEBE_TP2/src/services/db/connection");

startServer()

function startServer() {
    connectTodB();
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}
