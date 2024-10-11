export default function Register() {
    return (
        <>
            <h1>Регистрация</h1>
            <form>
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