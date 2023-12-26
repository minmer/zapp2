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
interface Props {
    id: number,
    min: number,
    cod: number,
}

const DateFetching: React.FC<Props> = (region) => {
    const [posts, setPosts] = useState<Street[]>([]);
    const [rea, setRea] = useState<string>("123");

    const confirmClick = (id: number) => {
        axios.get<Street[]>('https://probewebapp20231222201703.azurewebsites.net/api/minkol/present?id=' + id + '&min=' + region.min + '&cod=' + region.cod)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        setRea(Date.now.toString() + id);
    }
    const absentClick = (id: number) => {
        axios.get<Street[]>('https://probewebapp20231222201703.azurewebsites.net/api/minkol/absent?id=' + id + '&min=' + region.min + '&cod=' + region.cod)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        setRea(Date.now.toString() + id);
    };
    const falseClick = (id: number) => {
        axios.get<Street[]>('https://probewebapp20231222201703.azurewebsites.net/api/minkol/undo?id=' + id + '&min=' + region.min + '&cod=' + region.cod)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        setRea(Date.now.toString() + id);
    };
    useEffect(() => {
        if (region.id != -1) {
            console.log(region.id);
            axios.get<Street[]>('https://probewebapp20231222201703.azurewebsites.net/api/minkol/region?id=' + region.id + '&min=' + region.min + '&cod=' + region.cod)
                .then(res => {
                    console.log(res);
                    setPosts(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);
    // style={{border-collapse: "collapse"}}
    return (

        <div>
            {region.id != -1 ? (
                <table key={rea}>
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
                                <td>{new Date(post.startDate).toLocaleString("pl-PL", { hour: "numeric", minute: "2-digit" })} - {new Date(post.endDate).toLocaleString("pl-PL", { hour: "numeric", minute: "2-digit" })}</td>
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
            ) : (
                    <div>
                </div>
            )}
        </div >
    );
};

export default DateFetching;
