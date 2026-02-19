import express from "express";
import todoRoutes from './routes/todoRoutes.js'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/todos", todoRoutes);

app.get('/', (req, res) =>{
    res.send("server running....");
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});