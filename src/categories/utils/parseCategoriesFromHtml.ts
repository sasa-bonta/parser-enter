import cheerio from 'cheerio';

export default (html) => {
  const $ = cheerio.load(html);
  return $('.uk-subnav a').text();
};
