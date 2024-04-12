import React from "react";

import s from './SearchAndSort.module.css';

export function SearchAndSort(props) {
    return (
        <div className={s.container}>
            <div className={s.searchContainer}>
                <label className={s.label} htmlFor="searchInput">Search by Username:</label>
                <input
                    className={s.input}
                    type="text"
                    id="searchInput"
                    value={props.searchQuery}
                    onChange={props.handleSearchChange}
                />
            </div>
            <div className={s.sortContainer}>
                <button className={s.button} type='button' onClick={props.toggleSortDirection}>
                    Sort by Username ({props.sortDirection})
                </button>
            </div>
        </div>
    );
}

