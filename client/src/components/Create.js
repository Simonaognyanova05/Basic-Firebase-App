export default function Create() {
    return (
        <>
            <h1>Създаване на тема</h1>
            <form>
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