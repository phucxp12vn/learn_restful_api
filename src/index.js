const app = require("./config/express");
require('dotenv-safe').config();

const port = process.env.PORT;
app.listen(port, () => console.log(`server started on port ${port}`))

module.exports = app; // don't know why