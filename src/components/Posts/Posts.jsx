import { Paginator } from '../Common/Paginator/Paginator';
import { PostItem } from './PostItem/PostItem';

import styles from './Posts.module.scss';

export const Posts = ({ posts, totalPostsCount, pageSize, portionSize, onPageChanged, currentPage }) => (
    <div className={styles.postsWrapper}>
        {posts.map(p => <PostItem 
                                key={p.id}
                                post={p}
        />)}
        <Paginator
            totalPostsCount={totalPostsCount}
            pageSize={pageSize}
            portionSize={portionSize}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
        />
    </div>
);
