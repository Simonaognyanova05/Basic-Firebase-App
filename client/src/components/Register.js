import { useAuth } from "../contexts/AuthContext";
import { register } from "../services/register";
import {useNavigate} from 'react-router-dom';


export default function Register() {

    const navigate = useNavigate();
    const {onRegister} = useAuth();

    const registerHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let {username, password, rePass} = Object.fromEntries(formData);
        
        if(password !== rePass){
            alert('Паролите не съвпадат!');
            return;
        };

        if(password.length < 6){
            alert('Паролата трябва да е минимум 6 символа!');
            return;
        }

        let result = await register(username, password);

        if(result.status === 409){
            alert("Администраторът вече съществува!");
            return;
        };

        
        if(result.status === 200){
            onRegister(result);
            navigate('/');
        }
    }
    return (
        <>
            <h1>Регистрация</h1>
            <form onSubmit={registerHandler}>
                <label htmlFor="username">Потребителско име</label>
                <input type="text" name="username" />
                <label htmlFor="password">Парола</label>
                <input type="password" name="password" />
                <label htmlFor="rePass">Потвърдете паролата</label>
                <input type="password" name="rePass" />
                <input type="submit" name="Регистрация" />

            </form>
        </>
    );
}