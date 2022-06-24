import logo from '../../assets/logo.svg';

// navbar for all pages
export default function NavBar() {
    return (
        <nav className="border-b p-6 shadow-sm">
            <div className="flex w-36">
                <a href="/"><img src={logo} alt="logo" /></a>
            </div>
        </nav>
    )
}