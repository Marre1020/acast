const { rssReader } = require("./mod");

describe("RssReader", () => {
  test("First element in RSS feed", async () => {
    const result = await rssReader("https://rss.acast.com/varvet");
    const firstElementInRss = result.pop();

    expect(firstElementInRss).toEqual({
      title: "#1: Soran Ismail",
      url: "https://sphinx.acast.com/varvet/1soranismail/media.mp3",
    });
  }, 60000);

  test("100th element in RSS feed", async () => {
    const result = await rssReader("https://rss.acast.com/varvet");
    const hundredthElement = result[result.length - 99]

    expect(hundredthElement).toEqual({
      title: "#91: Bea Uusma",
      url: "https://sphinx.acast.com/varvet/91beauusma/media.mp3",
    });
  }, 60000);
});
