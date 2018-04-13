import { Action } from '@ngrx/store';


// Identifiers
export const TRY_REGISTER = 'TRY_REGISTER';
export const LOGIN = 'LOGIN';
export const TRY_LOGIN = 'TRY_LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';


export class TryRegister implements Action {
  readonly type = TRY_REGISTER;

  constructor (public payload: { password: string, username: string}) {}
}

export class TryLogin implements Action {
  readonly type = TRY_LOGIN;

  constructor (public payload: { password: string, username: string}) {}
}

export class Login implements Action {
  readonly type = LOGIN;

  // constructor (public payload: { password: string, email: string}) {}
}

export class Register implements Action {
  readonly type = REGISTER;
}

export class Logout implements Action {
  readonly type = LOGOUT;

  // constructor (public payload: {password: string, email: string}) {}
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor (public payload: string) {}
}


export type AuthActions = TryRegister | TryLogin | Login | Register | Logout | SetToken;
