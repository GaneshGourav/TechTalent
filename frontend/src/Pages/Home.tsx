import { useEffect } from 'react'

import { Navbar } from '../Components/Navbar'
import { UserForm } from './userForm';
// import { AllRoutes } from '../Components/AllRoutes';

export function Home() {
    
    useEffect(()=>{
        localStorage.removeItem("feedback");
        localStorage.removeItem("AI");
        localStorage.removeItem("voice");
    },[])

    return (
        <>
      <Navbar/>
      <UserForm/>
        </>
    )
}