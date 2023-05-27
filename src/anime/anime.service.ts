import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GetCurrentAnimeRawDto } from './dtos';
import { Anime, CurrentAnime } from './model/anime.model';
import { DEFAULT_ANILIST_OPTIONS } from './constants';
import { completedAnimeQuery, currentAnimeQuery } from './queries';

@Injectable()
export class AnimeService {
  public async getCurrentAnime(
    username = 'talzxc',
    page = 1,
  ): Promise<CurrentAnime[]> {
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

  public async getCompletedAnime(username = 'talzxc'): Promise<Anime[]> {
    let animeList: Anime[] = [];
    let hasNextPage = true;
    const queryData = {
      query: completedAnimeQuery,
      variables: {
        userName: username,
        page: 0,
      },
    };
    while (hasNextPage) {
      queryData.variables.page += 1;

      const options = {
        ...DEFAULT_ANILIST_OPTIONS,
        data: queryData,
      };

      try {
        const response = await axios(options);
        animeList = animeList.concat(
          GetCurrentAnimeRawDto.toAnimeList(response.data),
        );
        hasNextPage = response.data.data.Page.pageInfo.hasNextPage;
      } catch (error) {
        throw new Error(
          `Error in fetching airing anime [${(error as Error).message}]`,
        );
      }
    }
    return animeList;
  }
}
