import React, { useContext } from "react";
import { Helmet } from 'react-helmet';

import { ServerContext } from '../services/serverContext';
import { Users } from '../components/Users';


function UsersPage() {
    const serverData = useContext(ServerContext);
    return (
        <>
            <Helmet>
                <title>User List</title>
                <meta name="description" content="Explore our user list and discover interesting profiles!" />
            </Helmet>
            <main>
                <section>
                    <h1>Welcome to Our User Community</h1>
                    <Users serverData={serverData} />
                </section>
            </main>
        </>
    );
}

export default UsersPage;