import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PAGE, USERNAME } from './constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('mydata')
  async getData(): Promise<JSON> {
    return await this.appService.getMydata();
  }

  @Get(`anime/:${USERNAME}/:${PAGE}`)
  public async anime(
    @Param(USERNAME) userName: string,
    @Param(PAGE) page: number,
  ): Promise<JSON> {
    return await this.appService.getAnime(userName, page);
  }
}
