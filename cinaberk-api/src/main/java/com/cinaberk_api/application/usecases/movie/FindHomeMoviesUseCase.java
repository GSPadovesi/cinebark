package com.cinaberk_api.application.usecases.movie;

import com.cinaberk_api.application.gateways.MovieGateway;
import com.cinaberk_api.domain.entities.Movie;

import java.util.List;

public class FindHomeMoviesUseCase {
    private final MovieGateway movieGateway;

    public FindHomeMoviesUseCase(MovieGateway movieGateway){
        this.movieGateway = movieGateway;
    }

    public List<Movie> execute(){
        return movieGateway.findHomeAll();
    }
}
