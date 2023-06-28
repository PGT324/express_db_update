const path = require("path");

function getPost(req, res) {
    res.render("posts", {
        templateName: "post"
    })
    // res.sendFile(path.join(__dirname, "..", "public", "images", "KakaoTalk_20230626_225420859.jpg"));
}


module.exports = {
    getPost
}