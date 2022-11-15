const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "0f6433926d7c9da4875541425e816317",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
