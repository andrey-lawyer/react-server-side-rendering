import React, { useContext } from "react";
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';

import { ServerContext } from '../services/serverContext';
import { Posts } from '../components/Posts';

function UserPostsPage() {
    const serverData = useContext(ServerContext);

    return (
        <>
            <Helmet>
                <title>User Posts</title>
                <meta name="description" content="User Posts page description" />
            </Helmet>
            <main>
                <section>
                    <h1 > User Posts </h1>
                    <Link reloadDocument to={`/`}>
                        ← Back to Users
                    </Link>
                    <Posts serverData={serverData} />
                </section>
            </main>
        </>
    );
};
export default UserPostsPage;