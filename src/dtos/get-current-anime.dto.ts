export class GetCurrentAnimeRawDto {
  data: {
    Page: {
      pageInfo: {
        currentPage: number;
      };
      mediaList: [
        {
          progress: number;
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

  static toAnimeDtoList(raw: GetCurrentAnimeRawDto): AnimeDto[] {
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

export class AnimeDto {
  title: string;
  episodesBehind?: number;
  episodesLeft?: number;
  progress: number;
  totalEpisodes?: number;
  nextEpisode?: number;
}
