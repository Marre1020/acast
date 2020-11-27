const express = require("express");
const app = express();

const { createServer } = require("./config");
const { createRssReaderEndpoint } = require("./mods/RssReader");
const { createHashCheckerEndpoint } = require("./mods/HashChecker");
const { createApiInformationEndpoint } = require("./mods/ApiInformation");

createServer(app);
createApiInformationEndpoint(app)
createRssReaderEndpoint(app);
createHashCheckerEndpoint(app)
