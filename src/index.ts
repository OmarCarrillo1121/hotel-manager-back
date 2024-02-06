import express, { Application } from "express";

const app: Application = express();
const PORT: string = process.env.PORT || "3001";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
