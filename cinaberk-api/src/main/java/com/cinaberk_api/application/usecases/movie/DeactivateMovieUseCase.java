package com.cinaberk_api.application.usecases.movie;

import com.cinaberk_api.application.gateways.MovieGateway;
import com.cinaberk_api.domain.entities.Movie;

import java.util.UUID;

public class DeactivateMovieUseCase {
    private MovieGateway movieGateway;

    public DeactivateMovieUseCase(MovieGateway movieGateway){
        this.movieGateway = movieGateway;
    }

    public void execute(UUID id){
       Movie movie = movieGateway.findById(id);
       movie.deactivate();
       movieGateway.save(movie);
       return;
    }
}
