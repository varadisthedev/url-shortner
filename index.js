const mongoose = require("mongoose");

const PORT = 8001;
const app = express();


app.listen(PORT,()=>{
    console.log(`server started at: http://localhost:${PORT}/`);
})