const Parser = require("rss-parser");

const rssReader = async (rssFeedUrl) => {
  const parser = new Parser();
  const feed = await parser.parseURL(rssFeedUrl);

  const list = feed.items.map(async (item) => {
    return {
      title: item.title,
      url: item.enclosure.url,
    };
  });
  return Promise.all(list);
};

module.exports.rssReader = rssReader;
