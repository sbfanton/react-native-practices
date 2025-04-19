import { RAWG_API_KEY } from '@env';

const apiKey = RAWG_API_KEY;
//console.log('API Key:', apiKey);

export async function getLatestGames() {
  const LATEST_GAMES =
    `https://api.rawg.io/api/games?key=${apiKey}&page=1&page_size=254ordering=-metacritic`

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  const { results } = json;

  const games = results.map((result) => {
    const { 
        slug, 
        name,
        released, 
        background_image, 
        rating } = result;

    return {
      release: released,
      score: rating,
      slug,
      title: name,
      image: background_image,
    };
  });

  console.log(games);

  return games;
}

export async function getGameDetails(slug) {
  const GAME_DETAILS = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const { name, description_raw, rating, ratings, background_image } = json;

  // get the reviews
  const reviews = ratings.map((score) => {
    const { id, title, count, percent } = score;
    return { score: id, title, count, percent };
  });

  const game = {
    img: background_image,
    title: name,
    slug,
    description: description_raw,
    score: rating,
    reviews,
  };

  console.log(game);

  return game;
}