import likeImgGrey from '../../../assets/images/like_grey.svg';
import dislikeImg from '../../../assets/images/dislike.svg';

import styles from './PostItem.module.scss';

// no pictures on the server

export const PostItem = ({ post }) => {

    let { cover_image, title, posted_by, content, upvote_count, downvote_count } = post;

    return (
        <div className={styles.postItem}>
            <img src={cover_image.url} alt="img" />
            <div className={styles.postItem__content}>
                <div className={styles.postItem__content__top}>
                    <p className={styles.postItem__content__top__header}>
                        {title}
                    </p>
                    <div className={styles.postItem__content__top__author}>
                        <p>
                            posted by:
                        </p>
                        <span>
                            {posted_by.email}
                        </span>
                    </div>
                </div>
                <p className={styles.postItem__content__text}>
                    {content}
                </p>
                <div className={styles.postItem__content__appraisal}>
                    <div className={styles.postItem__content__appraisal__item}>
                        <img src={likeImgGrey} alt="svg" />
                        {upvote_count}
                    </div>
                    <div className={styles.postItem__content__appraisal__item}>
                        <img src={dislikeImg} alt="svg" />
                        {downvote_count}
                    </div>
                </div>
            </div>
        </div>
    )
};
