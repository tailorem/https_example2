// require request so we can make use of its functionality
var request = require("request");
var fs = require("fs");

function getImage() {

  // make GET request
  request.get("https://sytantris.github.io/http-examples/future.jpg")
    // use 'on error' to handle any potential errors
    .on("error", function(err) {
      throw err;
    })
    // log the HTTPS response code and content type
    .on("response", function(response) {
      console.log("Downloading image...");

      console.log("Response Status Code:", response.statusCode);
      console.log("Content Type:", response.headers['content-type']);
    })
    .pipe(fs.createWriteStream("./future.jpg"))
    .on("finish", function(){
      console.log("Download complete!");
    });

}

getImage();