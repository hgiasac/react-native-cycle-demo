const omdbApiKey = "a77e4929";
const host = "https://www.omdbapi.com";

export function getUrl(params?: object) {
  const opts = { ...params };

  const paramText = Object.keys(opts)
    .reduce((s, k) => `${s}&${k}=${opts[k].toString()}`, "");

  return `${host}/?apikey=${omdbApiKey}${paramText}`;
}

export function getMovieDetailUrl(id: string): string {
  return getUrl({ i: id });
}

export function searchMovieUrl(title: string): string {
  return getUrl({ s: title });
}
