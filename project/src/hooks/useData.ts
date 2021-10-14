
import { useState, useEffect } from 'react';
import { adaptFromSnakeToCamel } from '../utils/adapter';
import { EndPoint } from '../const';

import type ErrorType from '../types/error-type';
import type FetchedDataType from '../types/fetched-data-type';


type FetchedResponse<T> = FetchedDataType & {
  response?: T;
}

function useData<T>(target: string): FetchedResponse<T> {
  const [error, setError] = useState<ErrorType | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [response, setResponse] = useState<T>();

  useEffect(() => {
    fetch(EndPoint.Base + target)
      .then((res) => res.json())
      .then(
        (result) => {
          setResponse(adaptFromSnakeToCamel(result));
          setIsLoaded(true);
        },

        (err) => {

          setError(err);
          setIsLoaded(true);
        },
      );
  }, [target]);


  return { isLoaded, error, response };

}


export default useData;
