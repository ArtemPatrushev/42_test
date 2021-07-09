import React from 'react';
import { connect } from 'react-redux';

import { logoutThC } from '../../redux/thunks/thunks';
import { Header } from './Header';

class _HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    };
};

const mapStateToProps = (state) => ({
    isAuth: state.signUpPage.isAuth
});

export const HeaderContainer = connect(mapStateToProps, { logoutThC })(_HeaderContainer);
