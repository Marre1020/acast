const port = 3000;

const createServer = (app) => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
      });
}

module.exports = {
    createServer
}