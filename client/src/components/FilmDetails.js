import React from 'react';

export default function FilmDetails() {
    return (
        <section>
            <h2>Movie title</h2>
            <p>Movie tagline</p>
            <h3>Showing times</h3>
            <ul>
                <li>13:00</li>
                <li>15:00</li>
                <li>17:00</li>
            </ul>
            <img src="/img/posters/1.jpg" alt="Movie title"/>
            <div>Movie description</div>
        </section>
    );
}