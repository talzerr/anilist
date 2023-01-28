import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'anime' })
export class Anime {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  score?: number;
}

@ObjectType({ description: 'currentAnime' })
export class currentAnime {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  episodesBehind?: number;

  @Field(() => Int, { nullable: true })
  episodesLeft?: number;

  @Field(() => Int)
  progress: number;

  @Field(() => Int, { nullable: true })
  totalEpisodes?: number;

  @Field(() => Int, { nullable: true })
  nextEpisode?: number;
}
