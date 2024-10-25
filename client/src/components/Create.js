import { useNavigate } from 'react-router-dom';
import { create } from '../services/create';

export default function Create() {
    const navigate = useNavigate();

    const createHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { title, description, img } = Object.fromEntries(formData);

        let data = await create(title, description, img);

        if (data.status === 200) {
            alert('Статията е създаденa успешно!');
            navigate('/');
        }

    }
    return (
        <>
            <h1>Създаване на тема</h1>
            <form onSubmit={createHandler}>
                <label htmlFor="title">Заглавие</label>
                <input type="text" name="title" />
                <label htmlFor="description">Описание</label>
                <input type="text" name="description" />

                <label htmlFor="img">Изображение</label>
                <input type="text" name="img" />

                <input type="submit" name="Създаване" />
            </form>
        </>
    );
}