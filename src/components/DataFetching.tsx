import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DateFetching from './DateFetching';

interface Post {
    id: number,
    startDate: Date,
    endDate: Date,
    minName: string,
    minTel: string,
    priest: string,
    street: string
}
interface Props {
    id: number,
    cod: number,
}

const DataFetching: React.FC<Props> = (kol) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [koleda, setKoleda] = useState(-1);



    const handleClick = (id:number) => {
        setKoleda(id)
    }

    useEffect(() => {
        axios.get<Post[]>('https://probewebapp20231222201703.azurewebsites.net/api/minkol/list?id=' + kol.id + '&cod=' + kol.cod)
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    // style={{border-collapse: "collapse"}}
    return (

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
                            <tr key={"kol_" + post.id}>
                                <td>{post.street}</td>
                                <td>{new Date(post.startDate).toLocaleString("pl-PL", { weekday: "long", year: "2-digit", month: "2-digit", day: "2-digit", hour: "numeric", minute: "2-digit" })}</td>
                                <td>{new Date(post.endDate).toLocaleString("pl-PL", { weekday: "long", year: "2-digit", month: "2-digit", day: "2-digit", hour: "numeric", minute: "2-digit" })}</td>
                                <td>{post.priest}</td>
                                <td>{post.minName}</td>
                                <td>{post.minTel}</td>
                                <td><button onClick={() => handleClick(post.id)}>Szczegóły</button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table >
            <DateFetching id={koleda} min={kol.id} cod={kol.cod} key={"koleda_" + koleda} />
        </div >
    );
};

export default DataFetching;
