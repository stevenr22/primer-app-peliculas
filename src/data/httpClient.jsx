const API = "https://api.themoviedb.org/3";
export function get(path) {
  //PATH SERAN COMO LAS PROPS
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjc3MzM4NmRmYjI0N2MyOGRkNjU4ODI0YWZhM2ZkZiIsIm5iZiI6MTcyOTgxMzM2NS41OTAwMzIsInN1YiI6IjY3MWFiYjYzNDI3YzVjMTlmMDI1ZDQ1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mco15JxFD54dNVx-efeFEBYiLZO5AQADd8xeP9ZHpdc",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
