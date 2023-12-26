import React, { useEffect } from 'react';
import axios from 'axios';

interface Street {
    id: number,
    startDate: Date,
    endDate: Date,
    adress: string,
    status: string,
    comment: string
}

const StreetFetching: React.FC = () => {

    const checkClick = () => {
    }
    useEffect(() => {
            axios.get<Street[]>('https://probewebapp20231222201703.azurewebsites.net/api/minkol/region?id=')
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
    }, []);
    return (

        <div>
            <h2>Kolęda 2023/24</h2>

            <br />
            Poniżej istnieje możliwość wpisania swojego adresu, aby sprawdzić przybliżoną godzinę przybycia księdza z kolędą.
            <br />
            Przy rozpisaniu kolędy nie miałem na bieżąco przed sobą listę z imionami, więc przepraszam, jeśli zapomniałem uwzględnić jakieś osobiste prośby.
            < br />
            <input
                id="street_input"
            />
            < br />
            <button onClick={checkClick}>Sprawdź</button>
        </div >
    );
};

export default StreetFetching;
