import { currentAnime } from '../model/anime.model';

export class GetCurrentAnimeRawDto {
  data: {
    Page: {
      pageInfo: {
        currentPage: number;
      };
      mediaList: [
        {
          progress: number;
          mediaId: number;
          media: {
            episodes?: number;
            nextAiringEpisode?: {
              episode: number;
            };
            title: {
              native: string;
            };
          };
        },
      ];
    };
  };

  static toCurrentAnimeDtoList(raw: GetCurrentAnimeRawDto): currentAnime[] {
    const animeList = raw.data.Page.mediaList;
    return animeList.map((anime) => {
      return {
        id: anime.mediaId,
        title: anime.media.title.native,
        episodesBehind:
          anime.media.nextAiringEpisode?.episode - 1 - anime.progress || 0,
        episodesLeft:
          anime.media.episodes - anime.progress < 0
            ? undefined
            : anime.media.episodes - anime.progress,
        progress: anime.progress,
        totalEpisodes: anime.media.episodes || undefined,
        nextEpisode: anime.media.nextAiringEpisode?.episode || undefined,
      };
    });
  }

  static toAnimeDtoList(raw: GetCurrentAnimeRawDto): AiringAnimeDto[] {
    const animeList = raw.data.Page.mediaList;
    return animeList.map((anime) => {
      return {
        title: anime.media.title.native,
        episodesBehind:
          anime.media.nextAiringEpisode?.episode - 1 - anime.progress || 0,
        episodesLeft:
          anime.media.episodes - anime.progress < 0
            ? undefined
            : anime.media.episodes - anime.progress,
        progress: anime.progress,
        totalEpisodes: anime.media.episodes || undefined,
        nextEpisode: anime.media.nextAiringEpisode?.episode || undefined,
      };
    });
  }
}

export class AiringAnimeDto {
  title: string;
  episodesBehind?: number;
  episodesLeft?: number;
  progress: number;
  totalEpisodes?: number;
  nextEpisode?: number;
}
