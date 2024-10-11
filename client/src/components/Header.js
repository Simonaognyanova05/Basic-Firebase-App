import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
    const { admin } = useAuth();

    const adminLinks = (
        <>
            <li><Link to="/create">Създаване</Link></li>
            <li><Link to="/logout">Излизане</Link></li>
            <p>{admin.username}</p>
        </>
    );

    const userLinks = (
        <>
            <li><Link to="/login">Влизане</Link></li>
            <li><Link to="topics">Теми</Link></li>
        </>
    );
    return (
        <>
            <ul>
                <li><Link to="/">Начало</Link></li>
                {
                    Boolean(admin.username)
                    ? adminLinks
                    : userLinks
                }
            </ul>

        </>
    );
}