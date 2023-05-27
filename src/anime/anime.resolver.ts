import { Args, Query, Resolver } from '@nestjs/graphql';
import { AnimeService } from './anime.service';
import { Anime, CurrentAnime } from './model/anime.model';

@Resolver(() => CurrentAnime)
export class AnimeResolver {
  constructor(private readonly animeSerivce: AnimeService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(() => [CurrentAnime])
  CurrentAnime(
    @Args('username', { defaultValue: 'talzxc' }) username: string,
  ): Promise<CurrentAnime[]> {
    return this.animeSerivce.getCurrentAnime(username);
  }

  @Query(() => [Anime])
  GetUsersCompletedAnime(
    @Args('username', { defaultValue: 'talzxc' }) username: string,
  ): Promise<Anime[]> {
    return this.animeSerivce.getCompletedAnime(username);
  }
}
