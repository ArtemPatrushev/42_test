import React, { useState } from 'react';
import cn from 'classnames';

import styles from './Paginator.module.scss';

//buttons are my solution

export const Paginator = ({ totalPostsCount, pageSize, portionSize, currentPage, onPageChanged }) => {

    let pagesCount = Math.ceil(totalPostsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.pagination}>
            {portionNumber > 1 &&
                <button className={styles.paginatorButton} onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <div className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p);
                        }}>{p}</div>
                })
            }
            {portionCount > portionNumber &&
                <button className={styles.paginatorButton} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Next</button>
            }
        </div>
    );
};
