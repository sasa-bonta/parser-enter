import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello parser-enter! <br> http://localhost:3000/search?search=iphone <br> http://localhost:3000/categories <br> http://localhost:3000/page?link=/ru/photo-video/obektivy/';
  }
}
