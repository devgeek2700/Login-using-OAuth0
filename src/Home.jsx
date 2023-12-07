import React from 'react'
import Navbar from './Navbar'
import { useAuth0 } from "@auth0/auth0-react";


function Home() {
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            {/* <Navbar /> */}

            <div class="home_container">
            <p id='linkpara'>My LinkedIn Information</p>
                <h1>Welcome 
                {
                    isAuthenticated && (
                    <span id='username'>{user.name}</span>
                    )
                }
               
                </h1>

                <h2 className='paratxt'>Your Username is: 
                {
                    isAuthenticated && (
                    <span id='username1'>{user.name}</span>
                    )
                }

                </h2>

                <h2 className='paratxt'>Your User Mail is: 
                {
                    isAuthenticated && (
                    <span id='username1'>{user.email}</span>
                    )
                }

                </h2>

            </div>
        </>
    )
}

export default Home
