export const animeQuery = `#graphql
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
`;

export const pageQuery = `#graphql
  query ($userName: String, $type: MediaType, $page: Int) {
    Page(page: $page) {
      pageInfo {
        currentPage
      }
      mediaList(userName: $userName, type: $type) {
        progress
        score
        media {
          title {
            userPreferred
          }
        }
      }
    }
  }
`;

export const currentAnimeQuery = `#graphql
  query ($userName: String, $page: Int) {
    Page(page: $page) {
      pageInfo {
        currentPage
      }
      mediaList(userName: $userName, type: ANIME, status: CURRENT) {
        
        media {
          }
          title {
            native
          }
        }
      }
    }
  }
`;

export const completedAnimeQuery = `#graphql
  query ($userName: String, $page: Int) {
    Page(page: $page) {
      pageInfo {
        currentPage
        hasNextPage
      }
      mediaList(userName: $userName, type: ANIME, status: COMPLETED) {
        mediaId
        score
        media {
          title {
            native
          }
        }
      }
    }
  }
`;
