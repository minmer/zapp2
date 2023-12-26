import React, { useState } from 'react';
import axios from 'axios';


const StreetFetching: React.FC = () => {

    const [value, setValue] = useState(""); // integer state
    const checkClick = () => {
        const street = (document.getElementById("street_input") as HTMLInputElement).value
        axios.get<string>('https://probewebapp20231222201703.azurewebsites.net/api/minkol/street?street=' + street)
            .then(res => {
                console.log(res);
                setValue(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (

        <div>
            <h2>Kolęda 2023/24</h2>

            <br />
            Poniżej istnieje możliwość wpisania swojego adresu, aby sprawdzić przybliżoną godzinę przybycia księdza z kolędą.
            <br />
            Aby sprawdzanie się powiodło należy napisać adres według poniższego wzoru:
            < br />
            np. Zielonki, Osiedlowa 21
            < br />
            np. Zielonki, Rzyczyska 9 M
            < br />
            np. Garlica Murowana, Garlicka 110
            < br />
            <input
                id="street_input"
            />
            < br />
            <button onClick={checkClick}>Sprawdź</button>
            <h2>{value}</h2>
        </div >
    );
};

export default StreetFetching;
