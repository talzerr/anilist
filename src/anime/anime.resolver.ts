import { Args, Query, Resolver } from '@nestjs/graphql';
import { AnimeService } from './anime.service';
import { currentAnime } from './model/anime.model';

@Resolver(() => currentAnime)
export class AnimeResolver {
  constructor(private readonly animeSerivce: AnimeService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(() => [currentAnime])
  CurrentAnime(
    @Args('username', { defaultValue: 'talzxc' }) username: string,
  ): Promise<currentAnime[]> {
    return this.animeSerivce.getCurrentAnime(username);
  }
}
