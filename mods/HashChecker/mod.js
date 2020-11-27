const sha = require("sha256-file");
const Fs = require("fs");
const Path = require("path");
const Axios = require("axios");

const _getChecksum = (file) => {
  try {
    const hash = sha(file);
    return hash;
  } catch (error) {
    console.log({
      reason: "Failed to hash",
      message: error,
    });
  }
};

const _downloadMp3File = async (url) => {
  try {
    const response = await Axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    const name = `audio.mp3`;
    const path = Path.resolve(__dirname, "mp3", name);
    const writer = Fs.createWriteStream(path);
    response.data.pipe(writer);

    return new Promise((res) => {
      writer.on("finish", () => {
        res(name);
      });
      writer.on("error", () => {
        throw new Error("Error!!");
      });
    });
  } catch (error) {
    console.error({
      reason: "Failed download...",
      message: error,
    });
  }
};

const checkHash = async (url) => {
  const file = await _downloadMp3File(url);
  if (file == undefined) return "Failed to download";

  const hash = _getChecksum(`./mods/HashChecker/mp3/${file}`);
  if (hash == undefined) return "Failed to hash";

  return hash;
};

module.exports.checkHash = checkHash;
