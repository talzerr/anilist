import { requestOptions } from '../interfaces';

export const USERNAME = 'username';
export const PAGE = 'page';
const ANILIST_URL = 'https://graphql.anilist.co';
const ANILIST_HEADERS = {
  'Content-Type': 'application/json',
  accept: 'application/json',
};
const ANILIST_METHOD = 'post';
export const DEFAULT_ANILIST_OPTIONS: Partial<requestOptions> = {
  url: ANILIST_URL,
  method: ANILIST_METHOD,
  headers: ANILIST_HEADERS,
};
