import React, { useContext } from "react";
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';

import { ServerContext } from '../services/serverContext';
import { Albums } from '../components/Albums';

function UserAlbumsPage() {
    const serverData = useContext(ServerContext);
    return (
        <>
            <Helmet>
                <title>User Albums</title>
                <meta name="description" content="User Albums page description" />
            </Helmet>
            <main>
                <section>
                    <h1> User Albums </h1>
                    <Link reloadDocument to={`/`}>
                        ← Back to Users
                    </Link>
                    <Albums serverData={serverData} />
                </section>
            </main>
        </>
    );
};
export default UserAlbumsPage;