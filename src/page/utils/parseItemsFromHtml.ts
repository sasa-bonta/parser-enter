import cheerio from 'cheerio';

export default (html) => {
  const $ = cheerio.load(html);
  const result = [];
  $('.ty-grid-list__item').each(function () {
    result.push({
      name:
        $(this).find('.product-title').text().trim() +
        $(this).find('.ty-product__descr').text().trim(),
      price: $(this)
        .find('.ty-price span:first-child')
        .text()
        .trim()
        .replace(/\s/g, ''),
      image: $(this).find('.cm-image').attr('data-src'),
      url: $(this).find('a').attr('href'),
    });
  });
  return result;
};
