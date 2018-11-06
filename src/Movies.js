import React, { Component } from 'react';

class WhatIsYourFavoriteMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: '',
            moviePoster: '',
            movieComment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitMovie = this.submitMovie.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitMovie(e) {
        e.preventDefault();
        const url = 'http://92.175.11.66:3001/api/quests/movies/';
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert('Film enregistré avec succès !');
                }
            }).catch(e => {
                console.error(e);
                alert('Il y a eu une erreur lors de l\'ajout du film.');
            });
    }

    render() {
        return (

            <div className="movie">
                <h1>Saisi un film, un lien vers un poster et un commentaire</h1>

                <form onSubmit={this.submitMovie}>
                    <fieldset>
                        <div className="form-data">
                            <label htmlFor="movieName">Nom du film</label>
                            <input
                                type="text"
                                id="movieName"
                                name="movieName"
                                onChange={this.onChange}
                                value={this.state.movieName}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="moviePoster">URL du poster</label>
                            <input
                                type="text"
                                id="moviePoster"
                                name="moviePoster"
                                onChange={this.onChange}
                                value={this.state.moviePoster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="movieComment">Ajoute un commentaire sur ce film</label>
                            <input
                                type="textarea"
                                id="movieComment"
                                name="movieComment"
                                onChange={this.onChange}
                                value={this.state.movieComment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div >
        )
    };
}

export default WhatIsYourFavoriteMovie;