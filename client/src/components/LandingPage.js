import React from 'react';
import films from '../films.json';

console.log('Films are %o', films);

export default function LandingPage() {
    return (
        <section>
            <h2>What do you want to see?</h2>
            <input type="date" name="date" />
            <section className="filmsList">
                <section className="film">
                    <h3>{films[0].title}</h3>
                    <p>{films[0].tagline}</p>
                    <img src={films[0].poster_path} alt={films[0].title}/>
                </section>
                <section className="film">
                    <h3>{films[1].title}</h3>
                    <p>{films[1].tagline}</p>
                    <img src={films[1].poster_path} alt={films[1].title}/>
                </section>
                <section className="film">
                    <h3>{films[2].title}</h3>
                    <p>{films[2].tagline}</p>
                    <img src={films[2].poster_path} alt={films[2].title}/>
                </section>
                <section className="film">
                    <h3>{films[3].title}</h3>
                    <p>{films[3].tagline}</p>
                    <img src={films[3].poster_path} alt={films[3].title}/>
                </section>
            </section>
        </section>
    );
}