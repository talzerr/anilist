import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AnimeDto, GetCurrentAnimeRawDto } from './dtos';
import { requestOptions } from './interfaces';
import { anilistUrl, currentAnimeQuery, pageQuery } from './queries';

@Injectable()
export class AppService {
  async getMydata(): Promise<JSON> {
    const variables = { userName: 'talzxc' };
    const options = this.requestOptions(pageQuery, variables);

    try {
      const response = await axios(options);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getCurrentAnime(userName = 'talzxc', page = 1): Promise<AnimeDto[]> {
    const variables = {
      userName,
      page,
    };
    const options = this.requestOptions(currentAnimeQuery, variables);
    try {
      const response = await axios(options);
      return GetCurrentAnimeRawDto.toAnimeDtoList(response.data);
    } catch (error) {
      return error;
    }
  }

  private requestOptions(query: string, variables: any): requestOptions {
    return {
      url: anilistUrl,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      data: { query: query, variables: variables },
    };
  }
}
