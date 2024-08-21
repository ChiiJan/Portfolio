import '../css/nav.css';

export default function Navbar() {
    return (
        <nav className='nav'>
            <a href="/Portfolio" className='site-title'>
                Janice Chua
            </a>
            <ul>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/resume'>Resume</a>
                </li>
                <li>
                    <a href='/Project'>Work</a>
                </li>
            </ul>
        </nav>
    )
}
