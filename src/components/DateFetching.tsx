import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Street {
    id: number,
    startDate: Date,
    endDate: Date,
    adress: string,
    status: string,
    comment: string
}

const DateFetching: React.FC = (region) => {
    const [posts, setPosts] = useState<Street[]>([]);

    const confirmClick = (id: number) => {
        if (id == 0)
            console.log("abc");
    };
    const absentClick = (id: number) => {
        if (id == 0)
            console.log("abc");
    };
    const falseClick = (id: number) => {
        if (id == 0)
            console.log("abc");
    };

    useEffect(() => {
        axios.get<Street[]>('https://probewebapp20231222201703.azurewebsites.net/api/minkol/region?id=' + region)
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
            <table>
                <thead>
                    <tr>
                        <th>Adres</th>
                        <th>Spodziewany czas</th>
                        <th>Kolęda</th>
                        <th>Informacje</th>
                        <th>Przyjęcie</th>
                        <th>Nieobecność</th>
                        <th>Pomyłka</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        posts.map(post => (
                            <tr key={"region_" + post.id}>
                                <td>{post.adress}</td>
                                <td>{new Date(post.startDate).toLocaleString("pl-PL", { hour: "numeric", minute: "2-digit" })} + " - "+ {new Date(post.endDate).toLocaleString("pl-PL", { hour: "numeric", minute: "2-digit" })}</td>
                                <td>{post.status}</td>
                                <td>{post.comment}</td>
                                <td><button onClick={() => confirmClick(post.id)}>Przyjęcie</button></td>
                                <td><button onClick={() => absentClick(post.id)}>Nieobecność</button></td>
                                <td><button onClick={() => falseClick(post.id)}>Pomyłka</button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table >
        </div >
    );
};

export default DateFetching;
