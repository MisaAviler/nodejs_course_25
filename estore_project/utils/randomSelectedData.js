export const getRandomObjects = (arr, n) => {
  const randomed = [...arr].sort(() => 0.5 - Math.random());
  return randomed.slice(0, n);
}