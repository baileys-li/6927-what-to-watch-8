import Button from '../../button/button';
import { AppRoute } from '../../../const';

import style from './page404.module.scss';

function Page404(): JSX.Element {
  return (
    <main className={`${style.wrapper} page-content`}>
      <h1>No Page Found</h1>
      <p>
        <Button href={AppRoute.Main}>Return to Main Page</Button>
      </p>
    </main>
  );
}

export default Page404;
