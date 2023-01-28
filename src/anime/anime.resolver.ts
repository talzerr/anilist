import { Args, Query, Resolver } from '@nestjs/graphql';
import { AnimeService } from './anime.service';
import { Anime, currentAnime } from './model/anime.model';

@Resolver((of) => currentAnime)
export class AnimeResolver {
  constructor(private readonly animeSerivce: AnimeService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(returns => [currentAnime])
  CurrentAnime(@Args('username') username: string): Promise<currentAnime[]> {
    return this.animeSerivce.getCurrentAnime(username);
  }
}
