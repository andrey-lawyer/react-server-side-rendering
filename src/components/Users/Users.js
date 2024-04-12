import React from "react";
import { Link } from "react-router-dom";

import { useSortAndSearch } from "../../hooks/useSortAndSearch";
import { SearchAndSort } from '../SearchAndSort';

import s from "./User.module.css";

export function Users({ serverData }) {
    const {
        handleSearchChange,
        searchQuery,
        toggleSortDirection,
        sortedData,
        sortDirection,
    } = useSortAndSearch(serverData);

    return (
        <>
            <SearchAndSort
                handleSearchChange={handleSearchChange}
                searchQuery={searchQuery}
                toggleSortDirection={toggleSortDirection}
                sortDirection={sortDirection}
            />

            {serverData.length > 0 ? (
                <ul className={s.usersList}>
                    {sortedData.map((item) => (
                        <li key={item.id} className={s.userCard}>
                            <div>
                                <span className={s.label}>Name:</span> {item.name}
                            </div>
                            <div>
                                <span className={s.label}>Username:</span> {item.username}
                            </div>
                            <div>
                                <span className={s.label}>Email:</span> {item.email}
                            </div>
                            <div>
                                <span className={s.label}>Address:</span>{" "}
                                <address>
                                    <div>{item.address.street}</div>
                                    <div>{item.address.suite}</div>
                                    <div>{item.address.city}</div>
                                    <div>{item.address.zipcode}</div>
                                    <div >
                                        Geolocation latitude: {item.address.geo.lat} <span>longitude: {item.address.geo.lng}</span>
                                    </div>
                                </address>
                            </div>
                            <div>
                                <span className={s.label}>Phone:</span> {item.phone}
                            </div>
                            <div>
                                <span className={s.label}>Website:</span> {item.website}
                            </div>
                            <div>
                                <span className={s.label}>Company:</span> {item.company.name}{" "}
                                <span>{item.company.catchPhrase}</span>{" "}
                                <span>{item.company.bs}</span>
                            </div>
                            <div className={s.links}>
                                <Link reloadDocument to={`/${item.id}/posts`}>
                                    to Posts
                                </Link>
                                <Link reloadDocument to={`/${item.id}/albums`}>
                                    to Albums
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No server data available.</p>
            )}
        </>
    );
}