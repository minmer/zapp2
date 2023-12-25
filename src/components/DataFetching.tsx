
        <div>
            <h2>Kolęda 2023/24</h2>

            <br />
            W rozpisce kolędy zostało uwzględnione następujące rzeczy:
            <br />
            1. Ilość punktów wynikających ze służenia
                < br />
                2. Staż w służbie liturgicznej(nowi ministranci, ministranci, lektorzy)
                    < br />
                    3. Terminy zgłoszone w formularzu
                        < br />
                        4. Miejsce zamieszkania(w dniu, w którym macie kolędę, mam nadzieję, że będziecie dostępni)
                            < br />
                            Przy rozpisaniu kolędy nie miałem na bieżąco przed sobą listę z imionami, więc przepraszam, jeśli zapomniałem uwzględnić jakieś osobiste prośby.
            < br />
            <h1 id="name"></h1>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Rejon/ulice</th>
                        <th>Rozpoczęcie</th>
                        <th>Zakończenie</th>
                        <th>Ksiądz</th>
                        <th>Imię i nazwisko drugiego ministranta</th>
                        <th>Telefon do drugiego ministranta</th>
                    </tr>
                </thead>

                <tbody>

                        {
                        posts.map(post => (
                            <tr key={"kol_"+post.id}>
                                <td>{post.street}</td>
                                <td>{new Date(post.startDate).toLocaleString("pl-PL", { weekday: "long", year: "2-digit", month: "2-digit", day: "2-digit", hour: "numeric", minute: "2-digit" })}</td>
                                <td>{new Date(post.endDate).toLocaleString("pl-PL", { weekday: "long", year: "2-digit", month: "2-digit", day: "2-digit", hour: "numeric", minute: "2-digit" })}</td>
                                <td>{post.priest}</td>
                                <td>{post.minName}</td>
                                <td>{post.minTel}</td>
                            </tr>
                            ))
                        }

                </tbody>
            </table >
        </div >
    );
