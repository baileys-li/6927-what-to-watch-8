import PromoFilm from '../../promo-film/promo-film';
import Header from '../../header/header';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieByID } from '../../../store/actions/filmsActions';
import { useEffect } from 'react';
import { RootState } from '../../../store/reducer';

function ReviewPage(): JSX.Element {
  const { id } = useParams();
  const selectedID = useSelector((state: RootState) => state.movies.selected?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    selectedID !== id && dispatch(getMovieByID(id as string));
  }, [dispatch, id, selectedID]);


  return (
    <>
      <Header headline='What to Watch' className='app__header' hiddenHeadline breadcrumbs />
      <PromoFilm review />;
    </>
  );
}

export default ReviewPage;
