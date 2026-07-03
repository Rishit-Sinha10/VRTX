import express from "express";

export const app = express();
export const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});