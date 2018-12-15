export const MANUAL = '/';
export const LOGIN = '/login';
export const REGISTER = '/register';
export const CREATE_GAME = '/create_game';
export const DASHBOARD = '/dashboard';
export const GAME_DETAIL = '/games/:id';
export const GET_GAME_DETAIL = (id) => {
    return '/games/' + id
};
