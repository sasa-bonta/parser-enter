import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { PageModule } from './page/page.module';

@Module({
  imports: [CategoriesModule, PageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
