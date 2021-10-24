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


export const enum UserActionType {
  Login = 'SIGN IN',
  Logout = 'SIGN OUT'
}

export const enum Genre {
  all = 'All genres',
  comedies = 'Comedies',
  crime = 'Crime',
  documentary = 'Documentary',
  dramas = 'Dramas',
  horror = 'Horror',
  pg = 'Kids & Family',
  romance = 'Romance',
  sciFi = 'Sci-Fi',
  thrillers = 'Thrillers',
}


export const enum EndPoint {
  Base = 'https://8.react.pages.academy/wtw',
  Films = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout'
}
