import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { requestOptions } from 'src/interfaces';
import { currentAnimeQuery, pageQuery, anilistUrl } from 'src/queries';
import { GetCurrentAnimeRawDto } from './dtos';
import { currentAnime } from './model/anime.model';

@Injectable()
export class AnimeService {
  public async getCurrentAnime(
    userName = 'talzxc',
    page = 1,
  ): Promise<currentAnime[]> {
    const variables = {
      userName,
      page,
    };
    const options = this.requestOptions(currentAnimeQuery, variables);
    try {
      const response = await axios(options);
      return GetCurrentAnimeRawDto.toCurrentAnimeDtoList(response.data);
    } catch (error) {
      throw new Error(
        `Error in fetching airing anime [${(error as Error).message}]`,
      );
    }
  }

  public async getCompletedAnime(userName = 'talzxc'): Promise<currentAnime[]> {
    const variables = {
      userName,
    };
    const options = this.requestOptions(pageQuery, variables);
    try {
      const response = await axios(options);
      return response.data;
    } catch (error) {
      throw new Error(
        `Error in fetching airing anime [${(error as Error).message}]`,
      );
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
