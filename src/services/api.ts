import { useFetch } from '../hooks/useFetch';

export function getWeatherByCityName(city: string) {
  let { data, error } = useFetch(city);

  return { data, error };
}