import PromoFilm from '../../promo-film/promo-film';
import Header from '../../header/header';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getMovie } from '../../../store/actions/filmsActions';
import { EndPoint } from '../../../const';

function ReviewPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useDispatch();

  dispatch(getMovie(`${EndPoint.Films}/${id}`));

  return (
    <>
      <Header headline='What to Watch' className='app__header' hiddenHeadline breadcrumbs />
      <PromoFilm review />;
    </>
  );
}

export default ReviewPage;
