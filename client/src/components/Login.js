export default function Login() {
    return (
        <>
            <h1>Влизане</h1>
            <form>
                <label htmlFor="username">Потребителско име</label>
                <input type="text" name="username" />
                <label htmlFor="password">Парола</label>
                <input type="password" name="password" />
                <input type="submit" value="Влизане" />
            </form>
        </>
    );
}