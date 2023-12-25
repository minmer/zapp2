import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
    id: number,
    startDate: Date,
    endDate: Date,
    minName: string,
    minTel: string,
    priest: string,
    street: string
}

const DataFetching: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const queryParameters = new URLSearchParams(window.location.search)
    const kol = queryParameters.get("kol")

    useEffect(() => {
        axios.get<Post[]>('https://probewebapp20231222201703.azurewebsites.net/api/minkol/list?id=' + kol)
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
            <h2>Kol�da 2023/24</h2>

            <br />
            W rozpisce kol�dy zosta�o uwzgl�dnione:
            <br />
            1. Ilo�� punkt�w wynikaj�cych ze s�u�enia
            < br />
            2. Sta� w s�u�bie liturgicznej(nowi ministranci, ministranci, lektorzy)
            < br />
            3. Terminy zg�oszone w formularzu
            < br />
            4. Miejsce zamieszkania(w dniu, w kt�rym macie kol�d�, mam nadziej�, �e b�dziecie dost�pni)
            < br />
            Przy rozpisaniu kol�dy nie mia�em na bie��co przed sob� list� z imionami, wi�c przepraszam, je�li zapomnia�em uwzgl�dni� jakie� osobiste pro�by.
            < br />
            <h1 id="name"></h1>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Rejon/ulice</th>
                        <th>Rozpocz�cie</th>
                        <th>Zako�czenie</th>
                        <th>Ksi�dz</th>
                        <th>Imi� i nazwisko drugiego ministranta</th>
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
                            </tr>
                        ))
                    }

                </tbody>
            </table >
        </div >
    );
};

export default DataFetching;