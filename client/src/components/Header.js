import { Link } from "react-router-dom"; 

export default function Header() {
    return (
        <ul>
            <li><Link to="/">Начало</Link></li>
            <li><Link to="/create">Създаване</Link></li>
            <li><Link to="/login">Влизане</Link></li>
            <li><Link to="topics">Теми</Link></li>
        </ul>
    );
}