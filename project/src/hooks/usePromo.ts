
import { useState, useEffect } from 'react';

import { EndPoint } from '../const';
import { transformSnakeToCamelCase } from '../utils/utils';

import type MovieType from '../types/movie-type';
import type ErrorType from '../types/error-type';


function usePromo(): (boolean | undefined | MovieType | ErrorType | null)[] {
  const [error, setError] = useState<ErrorType | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [promo, setPromo] = useState<MovieType | never>();

  useEffect(() => {
    fetch(EndPoint.Base + EndPoint.Promo)
      .then((res) => res.json())
      .then(
        (result) => {
          const adaptedObject: any = Object.fromEntries(
            Object.entries(result).map(([key, val]) => [transformSnakeToCamelCase(key), val]),
          );

          setPromo(adaptedObject);
          setIsLoaded(true);
        },

        (err) => {

          setError(err);
          setIsLoaded(true);
        },
      );
  }, []);


  return [isLoaded, error, promo];

}


export default usePromo;
