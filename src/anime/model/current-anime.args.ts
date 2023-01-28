import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class CurrentAnimeArgs {
  @Field(type => String)
  username = 'talzxc';
}
