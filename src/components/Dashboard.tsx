//import '../styles/Dashboard.scss';

import Link from "next/link";

interface DashboardProps {
    username: string;
}

export function Dashboard ({username}:DashboardProps) {
    return (
        <div className='container'>
        <div className='sidebar_container'>
        <div className='home_redirect'>
            
        <Link href="/">
         <img src="/images/logo_mint.png" alt="logo" />
         <h2>Cacio 'N Care</h2>
         </Link>
        </div>
        </div>
        <div className='body_container'>
        <span className='propic_container' > 
        <h1>Hi, {username}</h1>
        <img src="/images/logo2.png" className="propic" alt="propic test"/>
        </span>
        </div>
        </div>
    )
}