import React from "react";
import styles from "./Posts.module.css";

export function Posts({ serverData }) {
    return (
        <>
            {serverData.length > 0 ? (
                <ul className={styles.posts_list}>
                    {serverData.map((item) => (
                        <li key={item.id} className={styles.post_item}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>There are not any posts</p>
            )}
        </>
    );
}
