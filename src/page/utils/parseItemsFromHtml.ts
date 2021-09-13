import cheerio from 'cheerio';
export default (html) => {
  const $ = cheerio.load(html);
  const result = [];
  $('.ty-column4.uk-position-relative').each(function () {
    result.push({
      name: $(this).find('.product-title').text().trim(),
      description: $(this).find('.ty-product__descr').text().trim(),
    });
  });
  return result;
};
