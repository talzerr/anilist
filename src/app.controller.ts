import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { USERNAME } from './constants';
import { AnimeDto } from './dtos';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('mydata')
  async getData(): Promise<JSON> {
    return await this.appService.getMydata();
  }

  @Get(`anime/:${USERNAME}`)
  public async anime(@Param(USERNAME) userName: string): Promise<AnimeDto[]> {
    const x = await this.appService.getCurrentAnime(userName);
    console.log(x);
    return x;
  }
}
