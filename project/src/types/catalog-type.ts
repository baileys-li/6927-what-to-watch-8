import type SmallFilmCardType from './small-fim-card-type';

type CatalogType = {
  list?: Array<SmallFilmCardType>;
  genres?: Array<string>;
  similar?: boolean;
  path?: string;
};
export default CatalogType;
