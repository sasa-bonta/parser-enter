import { Injectable } from '@nestjs/common';
import axios from 'axios';
import parser from '../page/utils/parseItemsFromHtml';
import parseItemsFromHtml from '../page/utils/parseItemsFromHtml';

@Injectable()
export class SearchService {
  async searchItems(search) {
    console.log(search);
    const result = await axios.get(
      `https://enter.online/ru/poisk/?q=${search}`,
    );
    // console.log(result.data);
    return parseItemsFromHtml(result.data);
  }
}
