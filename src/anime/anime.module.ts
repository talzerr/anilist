import { Module } from '@nestjs/common';
import { AnimeResolver } from './anime.resolver';
import { AnimeService } from './anime.service';

@Module({
  providers: [AnimeResolver, AnimeService],
})
export class AnimeModule {}
