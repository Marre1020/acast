const { rssReader } = require("./mod");

const createRssReaderEndpoint = async (app) => {
  app.get("/rssReader", async (req, res) => {

    const rssFeedUrl = req.query.rss;
    const list = await rssReader(rssFeedUrl);

    res.send(`
    <pre>
      ${JSON.stringify(list, null, 2)}
    </pre>
    `);
  });
};

module.exports = {
  createRssReaderEndpoint,
};
