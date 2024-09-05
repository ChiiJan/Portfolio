import '../css/nav.css';

export default function Navbar() {
    return (
        <nav className='nav'>
            <a href="/Portfolio" className='site-title'>
                Janice Chua
            </a>
            <ul>
                
                <li>
                    <a href='/Resume'>Resume</a>
                </li>
                
            </ul>
        </nav>
    )
}
