import {
    SET_POSTS,
    SET_CURRENT_PAGE,
    SET_TOTAL_POSTS_COUNT,
    TOGGLE_IS_FETCHING
} from '../actions/actionsTypes';

const initialState = {
    posts: [],
    pageSize: 10,
    portionSize: 3,
    totalPostsCount: 0,
    currentPage: 1,
    isFetching: false,
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.posts };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_POSTS_COUNT:
            return { ...state, totalPostsCount: action.totalPostsCount };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        default:
            return state;
    };
};
