const MARKUP = {
  'add-review': 'Add Review',
  'head-guest': 'Head Guest',
  main: 'Main',
  'movie-page-details': 'Movie Page Details',
  'movie-page-in-list': 'Movie Page In List',
  'movie-page-reviews': 'Movie Page Reviews',
  'movie-page': 'Movie Page',
  'my-list': 'My List',
  'player-pause': 'Player Pause',
  player: 'Player',
  'sign-in-error': 'Sign In Error',
  'sign-in-message': 'Sign In Message',
  'sign-in': 'Sign In',
};

function DebugPage(): JSX.Element {
  return (
    <>
      <h1>Page for Debuging</h1>
      <a href='/' target='_blank' rel='noreferrer'>
        App
      </a>
      <ul>
        {Object.keys(MARKUP).map((href, index) => (
          <li key={href}>
            <a href={`${href}.html`} target='_blank' rel='noreferrer'>
              {Object.values(MARKUP)[index]}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DebugPage;
