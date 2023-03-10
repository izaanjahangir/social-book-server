import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post } from '../entities/post.entity';
import { PostLike } from '../entities/postLike.entity';
import { PostComment } from 'src/entities/postComment.entity';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [UserModule, TypeOrmModule.forFeature([Post, PostLike, PostComment])],
})
export class PostModule {}
