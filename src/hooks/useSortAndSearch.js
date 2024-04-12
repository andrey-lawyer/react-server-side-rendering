import { useState } from 'react';

export const useSortAndSearch = (serverData) => {

    const [searchQuery, setSearchQuery] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleSortDirection = () => {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    };

    const sortedData = serverData
        .filter((item) =>
            item.username.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (a.username < b.username) return sortDirection === "asc" ? -1 : 1;
            if (a.username > b.username) return sortDirection === "asc" ? 1 : -1;
            return 0;
        });

    return { handleSearchChange, searchQuery, toggleSortDirection, sortedData, sortDirection }

}