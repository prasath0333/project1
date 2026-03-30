import { genres } from '../config/genres';

export function parse(array, type) {
  const parsedResponse = [];

  array.forEach((element) => {
    const resolvedMedia = {
      id: element.id,
      title: element.name || element.title,
      rating: element.vote_average,
      overview: element.overview,
      poster: getImageUrl(element.poster_path, 'poster'),
      banner: getImageUrl(element.backdrop_path, 'original'),
      genre: getGenre(element.genre_ids, type),
    };

    parsedResponse.push(resolvedMedia);
  });

  return parsedResponse;
}

function getImageUrl(path, type) {
  const dimension = type === 'poster' ? 'w500' : 'original';
  return `https://image.tmdb.org/t/p/${dimension}${path}`;
}

function getGenre(genreIds, type) {
  const result = genres[type].filter((item) =>
    genreIds.includes(item.id)
  );

  if (result.length > 3) {
    return result.slice(0, 3);
  }

  return result;
}