import express from "express";
import axios from "axios";
import exphbs from "express-handlebars";

const app = express();
const { API_KEY, BASE_URL } = process.env;

//middlewares
app.use(express.json());

//Config Handlersbars
app.engine("handlebars", exphbs.engine());
app.set("views engine", "handlebars");
app.set("views", "./src/views");

//Config public folder
app.use(express.static("src/public"));

//routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

// app.get("/search", async (req, res) => {
//   try {
//     const { search_query } = req.query;
//     const url = `${BASE_URL}/search?part=snippet&q=${search_query}&key=${API_KEY}`;
//     const response = await axios.get(url);

//     for (const iterator of response.data.items) {
//       res.render("thumbnails.handlebars", { imageSrc: iterator.snippet.thumbnails.high.url });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "An error occurred while searching YouTube." });
//   }
// });


app.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const url = `${BASE_URL}/search?part=snippet&q=${query}&key=${API_KEY}`;
    const response = await axios.get(url);

    const imageSrcs = response.data.items.map(item => item.snippet.thumbnails.high.url);

    res.render("thumbnails.handlebars", { imageSrcs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Ocurrió un error mientras se buscaba en YouTube." });
  }
});

app.get("/home", (req, res) => {
  res.render("home.handlebars");
});

app.listen(process.env.PORT);
console.log("Server runing on port " + process.env.PORT);
