import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from 'src/article/schemas/article.schema';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { Comment, CommentSchema } from './schemas/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Comment.name,
        useFactory: () => {
          const schema = CommentSchema;
          CommentSchema.pre('findOneAndUpdate', function (next) {
            this.findOneAndUpdate({}, { update_at: Date.now() });
            next();
          });
          return schema;
        },
      },
    ]),
    MongooseModule.forFeatureAsync([
      {
        name: Article.name,
        useFactory: () => {
          const schema = ArticleSchema;
          return schema;
        },
      },
    ]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}