import { postsAPI, authAPI } from '../../api/api';
import { storage, fields } from '../../services/localStorage';
import { 
    toggleIsFetching, 
    setCurrentPage, 
    setPosts, 
    setTotalPostsCount,
    setAuthUserData,
    saveToken
} from '../actions/actions';

//for posts
export const getPostsThC = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        postsAPI.getPosts(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setPosts(data.data));
                dispatch(setTotalPostsCount(data.meta.total_entries));
            });
    };
};

//for auth
// TO DO: add error handlers
export const getAuthUserDataInfoThC = (token) => {
    return (dispatch) => {
        return authAPI.getMe(token)
            .then(data => {
                if (data.resultCode === 200) {
                    const { email, id } = data.data;
                    dispatch(setAuthUserData(email, id));
                };
            });
    };
};

export const signUpThC = ({ email, password, password_confirmation }) => async (dispatch) => {
    const data = await authAPI.signUp(email, password, password_confirmation);
    const token = `Bearer ${data.data.token}`;
    dispatch(saveToken(token));
    dispatch(getAuthUserDataInfoThC(token));
    storage.save(token, fields.token);
};

export const loginThC = (email, password) => async (dispatch) => {
    const data = await authAPI.login(email, password);
    const token = `Bearer ${data.data.token}`;
    dispatch(saveToken(token));
    dispatch(getAuthUserDataInfoThC(token));
    storage.save(token, fields.token);
};

export const logoutThC = () => async (dispatch) => {
    await authAPI.logout();
    dispatch(saveToken(null));
    dispatch(setAuthUserData(null, null));
    storage.remove(fields.token);
};