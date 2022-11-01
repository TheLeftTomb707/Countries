import React, { useEffect, useState } from "react";

const App = () => {
    const [country, setCountry] = useState("");

    useEffect(() => {
        async function Data() {
        var response = await fetch(`https://restcountries.com/v3.1/all`);
        const json = await response.json();
        var list = [];
        json.map((json) => 
        list.push( <div>
            <h2>{json.name.common}</h2>
            <h4>Capital: {json.capital}</h4>
            <img src={json.flags.png} alt={`${json.name.common} flag`} />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248613.81549699453!2d-59.5352554!3d13.18817665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c43f1fbae321aa3%3A0xeec51b38cf4362b!2sBarbados!5e0!3m2!1sen!2sus!4v1667254646975!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        ))
        setCountry(list);
        }
        Data()
    }, []);

    return (
        <div id="content">
            {country}
        </div>
    );
};

export default App;