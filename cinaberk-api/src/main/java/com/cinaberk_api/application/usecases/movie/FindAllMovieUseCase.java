package com.cinaberk_api.application.usecases.movie;

import com.cinaberk_api.application.commands.movie.SearchMoviesCommand;
import com.cinaberk_api.application.gateways.MovieGateway;
import com.cinaberk_api.domain.entities.Movie;

import java.util.List;

public class FindAllMovieUseCase {
    private final MovieGateway movieGateway;

    public FindAllMovieUseCase(MovieGateway movieGateway){
        this.movieGateway = movieGateway;
    }

    public List<Movie> execute(SearchMoviesCommand query){
        return movieGateway.findAll(query);
    }
}
