import express from "express";
import todoRoutes from './routes/todoRoutes.js'

import { errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/todos", todoRoutes);

// global error handler (ALWAYS LAST)
app.use(errorHandler);

app.get('/', (req, res) =>{
    res.send("server running....");
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});