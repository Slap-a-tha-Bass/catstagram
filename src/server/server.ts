import * as express from "express";
import * as path from "path";
import helmet from "helmet";
import * as compression from "compression";
import * as morgan from "morgan";
import routes from "./routes";
import "./db/index";
import { configurePassport } from "./middlewares/passport-strategies.mw";

const app = express();

configurePassport(app);
app.use(express.json());
app.use(express.static("public"));
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use(routes);
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
