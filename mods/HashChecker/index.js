const { checkHash } = require("./mod");

const createHashCheckerEndpoint = (app) => {
  app.get("/checksum", async (req, res) => {
    const url = req.query.url;

    const hash = await checkHash(url);
    res.send(hash)
  })
};

module.exports.createHashCheckerEndpoint = createHashCheckerEndpoint;