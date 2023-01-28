import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CurrentAnimeArgs {
  @Field(() => String)
  username = 'talzxc';
}
