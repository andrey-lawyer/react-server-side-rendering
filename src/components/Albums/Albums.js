import React from "react";
import styles from "./Albums.module.css";

export function Albums({ serverData }) {
    return (
        <>
            {serverData && serverData.length > 0 ? (
                <ul className={styles.albums_list}>
                    {serverData.map((item) => (
                        <li key={item.id} className={styles.album_item}>
                            <h2>{item.title}</h2>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>There are not any albums</p>
            )}
        </>
    );
}
