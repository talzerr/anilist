import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { currentAnimeQuery, pageQuery } from 'src/anime/queries';
import { GetCurrentAnimeRawDto } from './dtos';
import { currentAnime } from './model/anime.model';
import { DEFAULT_ANILIST_OPTIONS } from './constants';

@Injectable()
export class AnimeService {
  public async getCurrentAnime(
    username = 'talzxc',
    page = 1,
  ): Promise<currentAnime[]> {
    const queryData = {
      query: currentAnimeQuery,
      variables: {
        userName: username,
        page,
      },
    };
    const options = {
      ...DEFAULT_ANILIST_OPTIONS,
      data: queryData,
    };
    try {
      const response = await axios(options);
      return GetCurrentAnimeRawDto.toCurrentAnimeDtoList(response.data);
    } catch (error) {
      throw new Error(
        `Error in fetching airing anime [${(error as Error).message}]`,
      );
    }
  }

  public async getCompletedAnime(username = 'talzxc'): Promise<currentAnime[]> {
    const queryData = {
      query: pageQuery,
      variables: {
        userName: username,
      },
    };
    const options = {
      ...DEFAULT_ANILIST_OPTIONS,
      data: queryData,
    };
    try {
      const response = await axios(options);
      return response.data;
    } catch (error) {
      throw new Error(
        `Error in fetching airing anime [${(error as Error).message}]`,
      );
    }
  }
}
