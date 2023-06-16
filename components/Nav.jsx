import { useState, useEffect } from 'react';
import { NavLink } from '.';
import { userService } from 'services';
import Image from 'next/image'; 

export { Nav };

function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;
    
    return (
        <nav className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap mt-3 flex-col md:flex-row items-center">
            <div className="flex title-font font-medium items-center text-gray-900">
                <NavLink href="/" exact className="nav-item nav-link">
                     <span className="ml-3 text-xl">
                     <Image src="/kefi.png" width={60} height={40}></Image>
                     </span>
                </NavLink>
            </div>
            <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <NavLink href="/" exact className="nav-item nav-link">Home Page</NavLink>
                <NavLink href="/users" className="nav-item nav-link">Users</NavLink>
                <NavLink href="/menu" className="nav-item nav-link">Menu</NavLink>
                <NavLink href="/promo" className="nav-item nav-link">Promo</NavLink>
                <NavLink href="/contact" className="nav-item nav-link">Contact</NavLink>
                <NavLink href="/create" className="nav-item nav-link">CREATE</NavLink>
                
            </div>
            <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded">
                    <h1>Hi {userService.userValue?.firstName}!</h1>
                </button>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded" onClick={logout}>
                    Logout
                </button>
            </div>
            </div>
        </nav>
    );
}
