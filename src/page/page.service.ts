import { Injectable } from '@nestjs/common';
import axios from 'axios';
import parseItemsFromHtml from './utils/parseItemsFromHtml';

@Injectable()
export class PageService {
  async getItemsOnPage(link: string) {
    const { data } = await axios.get(
      `https://enter.online/${link}?sort_by=timestamp&sort_order=desc&result_ids=pagination_contents&is_ajax=1&items_per_page=500`,
    );
    return parseItemsFromHtml(data.html.pagination_contents);
  }
}
