import type ErrorType from './error-type';

type FetchedDataType = {
  isLoaded: boolean,
  error: ErrorType | null,
}

export default FetchedDataType;
