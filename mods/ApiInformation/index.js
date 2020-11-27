

const createApiInformationEndpoint = (app) => {
    app.get("/", (req, res) => {
        res.send(`
        <p>
            To get RSS feed info go the the /rssReader endpoint and </br> provide the RSS url as a 
            param like this "http://localhost:3000/rssReader?rss=https://rss.acast.com/varvet"
        </p>
        <p>
            To get a sha256 checksum for a mp3 url go to the /checksum endpoint and </br> 
            provide the url as a param like this "http://localhost:3000/checksum?url=https://sphinx.acast.com/varvet/kortversion--443-martinwidmark/media.mp3" </br> 
            (Note that this takes some time due to downloading the mp3 file...)
        </p>
        `)
    })
}
module.exports.createApiInformationEndpoint = createApiInformationEndpoint