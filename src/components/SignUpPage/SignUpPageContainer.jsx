import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { signUpThC, loginThC } from '../../redux/thunks/thunks';
import { SignUpPage } from './SignUpPage';
import { Preloader } from '../Common/Preloader/Preloader';

class _SignUpPageContainer extends React.Component {
    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : null}
                <SignUpPage signUp={this.props.signUpThC} loginThC={this.props.loginThC} />
            </>
        );
    };
};

const mapStateToProps = () => {
    return {};
};

export const SignUpPageContainer = compose(
    connect(mapStateToProps, {
        signUpThC,
        loginThC
    }),
)(_SignUpPageContainer);
