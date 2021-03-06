export const enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',

  NoMatch = '/404',

  Debug = '/debug',
}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const enum Genre {
  Initial = 'All genres',
}

export const enum EndPoint {
  Base = 'https://8.react.pages.academy/wtw',
  Films = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout'
}

export const enum LoginFormRegExps {
  Email = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$',
  Password = '^(?=.*[a-zA-Z])(?=.*[0-9]).{2,}$',
}
