import express from "express";
import secretRouter from "./router.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

// Mount the secret router at /api
app.use("/api", secretRouter);
app.use(cors(origin:[*,'http://localhost:3000']));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
