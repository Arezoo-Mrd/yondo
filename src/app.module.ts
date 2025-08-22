import { Module } from '@nestjs/common';

import { PostController } from './controller/post/post.controller';
import { PostsService } from './services/posts/posts.service';
import { HttpModule } from '@nestjs/axios';
import { CommonService } from './services/common/common.service';

@Module({
  imports: [HttpModule],
  controllers: [PostController],
  providers: [PostsService, CommonService],
})
export class AppModule { }
