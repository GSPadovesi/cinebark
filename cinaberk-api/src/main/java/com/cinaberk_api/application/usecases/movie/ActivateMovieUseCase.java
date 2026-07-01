package com.cinaberk_api.application.usecases.movie;

import com.cinaberk_api.application.gateways.MovieGateway;
import com.cinaberk_api.domain.entities.Movie;

import java.util.UUID;

public class ActivateMovieUseCase {
    private final MovieGateway movieGateway;

    public ActivateMovieUseCase(MovieGateway movieGateway){
        this.movieGateway = movieGateway;
    }

    public void execute(UUID id){
        Movie movie = movieGateway.findById(id);
        movie.activate();
        movieGateway.save(movie);
        return;
    }
}
