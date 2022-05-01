import React from 'react';
import { UserHeader } from '../../components';


export const UserPage = () => {
    return(
        <main className="userPage" >
            <UserHeader />
            <div className="content"></div>
        </main>
    )
}