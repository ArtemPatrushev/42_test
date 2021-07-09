import { 
    SET_POSTS, 
    SET_CURRENT_PAGE, 
    SET_TOTAL_POSTS_COUNT, 
    TOGGLE_IS_FETCHING 
} from './actionsTypes';
import {
    SET_USER_DATA,
    SET_TOKEN
} from './actionsTypes';

// for posts 
export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        posts
    };
};

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    };
};

export const setTotalPostsCount = (totalPostsCount) => {
    return {
        type: SET_TOTAL_POSTS_COUNT,
        totalPostsCount
    };
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    };
};

// for auth
export const setAuthUserData = (email, id) => {
    return {
        type: SET_USER_DATA,
        payload: { email, id }
    };
};

export const saveToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: { token }
    };
};