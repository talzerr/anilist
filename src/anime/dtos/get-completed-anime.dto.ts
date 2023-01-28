export class GetCompletedAnimeRawDto {
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
}

export class AnimeDto {
  title: string;
  episodesBehind?: number;
  episodesLeft?: number;
  progress: number;
  totalEpisodes?: number;
  nextEpisode?: number;
}
