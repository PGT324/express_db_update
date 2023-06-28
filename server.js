//express import
const express = require("express");

//port number
const port = 3000;

//path
const path = require("path");


//router
const usersRouter = require("./routes/users.router");
const postsRouter = require("./routes/posts.router");
const productsRouter = require("./routes/products.router");

//mongoose import
const { default: mongoose } = require("mongoose");

const app = express();

//hbs
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//static 미들웨어
app.use(express.static("public")); // http://localhost:3000/index.html처럼 접근
app.use("/static", express.static("public")); //static 가상경로 지정
app.use("/static", express.static(path.join(__dirname, "public"))); //express폴더가 아닌 다른 경로에서 접근할 수 있도록 절대경로를 작성

//json 미들웨어
app.use(express.json());

//에러처리기 미들웨어
app.use((error, req, res, next) => {
    res.json({ message: error.message });
})

//mongoose
mongoose.connect("mongodb+srv://qkrrjsxo456:qkrrjsxo@express-cluster.4ikzhcl.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("mongodb 접속!"))
    .catch((err) => console.log(err));
// 미들웨어
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`start: ${req.method} ${req.url}`);
    next();
    const diffTime = Date.now() - start;
    console.log(`end: ${req.method} ${req.baseUrl} ${diffTime}ms`)
})

//hbs 사용
app.get("/", (req, res) => {
    res.render("index", {
        title: "It's me!"
    })
})

app.use("/users", usersRouter.usersRouter);
app.use("/posts", postsRouter.postsRouter);
app.use("/products", productsRouter.productsRouter);

//main page
app.get("/", (req, res) => {
    res.send("hello world");
})

//server connection
app.listen(port, () => {
    console.log(`Running on ${port}`);
})