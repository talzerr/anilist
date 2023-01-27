export const anilistUrl = 'https://graphql.anilist.co';

export const animeQuery = `query($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
    }
}`;

export const pageQuery = `query($userName: String, $type: MediaType, $page: Int){
    Page(page: $page) {
        pageInfo {
            currentPage
        }
    mediaList(userName: $userName, type: $type) {
        progress,
        score,
        media {
            title {
                userPreferred
            }
        }
    }
    }
}`;

export const currentAnimeQuery = `query($userName: String, $page: Int){
    Page(page: $page) {
        pageInfo {
            currentPage
        }
    mediaList(userName: $userName, type: ANIME, status: CURRENT) {
        progress
        media {
            episodes
            nextAiringEpisode {
                episode
            }
            title {
                native
            }
        }
    }
    }
}`;
