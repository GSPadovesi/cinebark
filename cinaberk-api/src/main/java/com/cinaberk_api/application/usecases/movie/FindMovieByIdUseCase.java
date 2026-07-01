package com.cinaberk_api.application.usecases.movie;

import com.cinaberk_api.application.gateways.MovieGateway;
import com.cinaberk_api.domain.entities.Movie;

import java.util.UUID;

public class FindMovieByIdUseCase {
    private final MovieGateway movieGateway;

    public FindMovieByIdUseCase(MovieGateway movieGateway){
        this.movieGateway = movieGateway;
    }

    public Movie execute(UUID id){
        return movieGateway.findById(id);
    }
}
