import * as AuthActions from './auth.actions';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: '',
  authenticated: false,
};


export function authReducer (state = initialState, action: AuthActions.AuthActions) {

  switch (action.type) {
    case (AuthActions.REGISTER):
    case (AuthActions.LOGIN):
      return {
        ...state,
        authenticated: true,
      };
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload,
      };
    case (AuthActions.LOGOUT):
      return {
        ...state,
        authenticated: false,
        token: null,
      };
    default:
      return state;
  }
}
