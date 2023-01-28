import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'anime ' })
export class Anime {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  score?: number;
}

@ObjectType({ description: 'currentAnime ' })
export class currentAnime {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  episodesBehind?: number;

  @Field({ nullable: true })
  episodesLeft?: number;

  @Field()
  progress: number;

  @Field({ nullable: true })
  totalEpisodes?: number;

  @Field({ nullable: true })
  nextEpisode?: number;
}
