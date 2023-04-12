// @flow
import jwtDecode from 'jwt-decode';
import { Cookies } from 'react-cookie';
import * as Session from './session.helper';

/**
 * Checks if user is authenticated
 */
const isUserAuthenticated = () => {
    // const user = getLoggedInUser();
    // if (!user) {
    //     return false;
    // }
    // const decoded = jwtDecode(user.token);
    // const currentTime = Date.now() / 1000;
    // // if (decoded.exp < currentTime) {
    // //     console.warn('access token expired');
    // //     return false;
    // // } else {
    //     return true;
    // // }
    return Session.isLogedIn();
};

/**
 * Returns the logged in user
 */
const getLoggedInUser = () => {
    // const cookies = new Cookies();
    // const user = cookies.get('user');
    // return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
    return Session.getUser();
};

export { isUserAuthenticated, getLoggedInUser };
