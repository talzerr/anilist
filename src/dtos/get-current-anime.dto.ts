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
        progress: anime.progress,
        totalEpisodes: anime.media.episodes || undefined,
        nextEpisode: anime.media.nextAiringEpisode?.episode || undefined,
      };
    });
  }
}

export class AnimeDto {
  title: string;
  progress: number;
  totalEpisodes?: number;
  nextEpisode?: number;
}
