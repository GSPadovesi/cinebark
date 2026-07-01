package com.cinaberk_api.application.gateways;

import com.cinaberk_api.application.commands.movie.SearchMoviesCommand;
import com.cinaberk_api.domain.entities.Movie;

import java.util.List;
import java.util.UUID;

public interface MovieGateway {
    Movie save(Movie movie);
    Movie findById(UUID id);
    List<Movie> findAll(SearchMoviesCommand query);
    List<Movie> findHomeAll();
}
