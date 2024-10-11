import { useNavigate } from "react-router-dom";
import { login } from "../services/loign";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const { username, password } = Object.fromEntries(formData);

        const data = await login(username, password);

        if (data.status === 400) {
            alert('Администраторът не съществува!');
            return;
        };

        if (data.status === 401) {
            alert('Грешна парола!');
            return;
        };

        if (data.status === 200) {
            alert('Успешно влизане');
            let newData = await data.json();
            onLogin(newData);
            navigate('/');
        }

    }
    return (
        <>
            <h1>Влизане</h1>
            <form onSubmit={loginHandler}>
                <label htmlFor="username">Потребителско име</label>
                <input type="text" name="username" />
                <label htmlFor="password">Парола</label>
                <input type="password" name="password" />
                <input type="submit" value="Влизане" />
            </form>
        </>
    );
}