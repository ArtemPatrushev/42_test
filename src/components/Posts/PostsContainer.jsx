import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { getPostsThC } from '../../redux/thunks/thunks';
import { setCurrentPage } from '../../redux/actions/actions';
import { Posts } from './Posts';
import { Preloader } from '../Common/Preloader/Preloader';

class _PostsContainer extends React.Component {

    componentDidMount() {
        this.props.getPostsThC(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getPostsThC(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : null}
                <Posts
                    posts={this.props.posts}
                    totalPostsCount={this.props.totalPostsCount}
                    pageSize={this.props.pageSize}
                    portionSize={this.props.portionSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged} />
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        pageSize: state.postsPage.pageSize,
        totalPostsCount: state.postsPage.totalPostsCount,
        currentPage: state.postsPage.currentPage,
        portionSize: state.postsPage.portionSize,
        isFetching: state.postsPage.isFetching,
    };
};

export const PostsContainer = compose(
    connect(mapStateToProps, {
        setCurrentPage,
        getPostsThC
    }),
)(_PostsContainer);
