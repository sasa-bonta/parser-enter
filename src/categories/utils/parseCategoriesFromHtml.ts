import { parse } from 'fast-xml-parser';
import { decode } from 'he';
const options = {
  attributeNamePrefix: '@_',
  attrNodeName: 'attr', //default is 'false'
  textNodeName: '#text',
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: false,
  trimValues: true,
  cdataTagName: '__cdata', //default is 'false'
  cdataPositionChar: '\\c',
  parseTrueNumberOnly: false,
  numParseOptions: {
    hex: true,
    leadingZeros: true,
    skipLike: /\+[0-9]{10}/,
  },
  attrValueProcessor: (val, attrName) =>
    decode(val, { isAttributeValue: true }), //default is a=>a
  tagValueProcessor: (val, tagName) => decode(val), //default is a=>a
};
export default (html) => {
  const jsonObj = parse(html, options);
  return [...new Set(jsonObj.urlset.url.map(({ loc }) => loc))];
};
