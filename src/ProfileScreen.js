import React from 'react'
import Nav from './Nav'
import './ProfileScreen.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'
import PlansScreen from './PlansScreen'

function ProfileScreen() {
    const user = useSelector(selectUser)

    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen_info'>
                    <img src="https://imageproxy.ifunny.co/noop/user_photos/52a45594277e59076bd7164d352232418a997edf_0.jpg" alt='' ></img>
                    <div className='profileScreen_details'>
                        <h2> {user.email}</h2>
                        <div className='profileScreen_plans'>
                            <h3>Plans</h3>
                            <PlansScreen/>
                            <button
                                onClick={() => auth.signOut()}
                                className='profileScreen_signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProfileScreen;