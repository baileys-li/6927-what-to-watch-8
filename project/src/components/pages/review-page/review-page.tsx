import PromoFilm from '../../promo-film/promo-film';
import Header from '../../header/header';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getMovieByID } from '../../../store/actions/filmsActions';
import { useEffect } from 'react';

function ReviewPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatch(getMovieByID(id as string)));
  }, [dispatch, id]);


  return (
    <>
      <Header headline='What to Watch' className='app__header' hiddenHeadline breadcrumbs />
      <PromoFilm review />;
    </>
  );
}

export default ReviewPage;
