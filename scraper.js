const axios = require("axios");
const cheerio = require("cheerio");



async function getContent (url) {
  const results = [];

  const data = await axios.get(url)
      .then((response) => {
          const html = response.data;
          const $ = cheerio.load(html);
          $(".one-third > div").each(function(i, el){
            results[i] = $(el).text();
          }
          );
          return results;
  })
      .catch((error) => {
          console.log(error);
  });

  return data;

}


module.exports = {getContent}