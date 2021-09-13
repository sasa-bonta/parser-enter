import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(readonly searchService: SearchService) {}

  @Get()
  searchItems(@Query('search') search) {
    return this.searchService.searchItems(search);
  }
}
