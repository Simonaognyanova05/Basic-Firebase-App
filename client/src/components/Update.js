export default function Update() {
    return (
        <>
            <h1>Редактиране на тема</h1>

            <form>
                <label htmlFor="title">Заглавие</label>
                <input type="text" name="title" />
                <label htmlFor="desription">Описание</label>
                <input type="text" name="desription" />
                <label htmlFor="img">Изображение</label>
                <input type="text" name="desription" />
                <input type="submit" name="Редактиране" />
            </form>
        </>
    );
}