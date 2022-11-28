import compositions from "compositions";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

async function main() {
  await compositions.load();
}
main();
const app = express();
const port = process.env.PORT || 8000;

app.options("/", cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.post("/", cors(), (req, res) => {
  let arr = compositions(req.body.name);
  res.send(arr[0]);
});

app.listen(port, () => {
  console.log(`My app listening on port ${port}`);
});
