export default function Navbar(){

    
    return (
        <nav className="nav">
        <a href="/" className="site-title">My Site Name</a>
        <ul>
            <CustomLink href="/pricing">Pricing</CustomLink>
            <CustomLink href="/about">About</CustomLink>
           
        </ul>
    </nav>
    )
}


function CustomLink({href, children, ...props}) {
    const path = window.location.pathname
    
    return(
        <li className={path === href ? "active" : ""} >
            <a href={href} {...props}>{children}</a>
        </li>

    )
    
}







// return <nav className="nav">
// <a href="/" className="site-title">Site Name</a>
// <ul>
//     <li className="active">
//         <a href="/pricing">Pricing</a>
//     </li>
//     <li>
//         <a href="/about">About</a>
//     </li>