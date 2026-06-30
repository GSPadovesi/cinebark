package com.cinaberk_api.infrastructure.gateways;

import com.cinaberk_api.application.gateways.MovieGateway;
import com.cinaberk_api.domain.entities.Movie;
import com.cinaberk_api.infrastructure.persistence.movie.MovieEntity;
import com.cinaberk_api.infrastructure.persistence.movie.MovieEntityMapper;
import com.cinaberk_api.infrastructure.persistence.movie.MovieRepository;

public class MovieRepositoryGateway implements MovieGateway {
    private final MovieRepository movieRepository;
    private final MovieEntityMapper movieEntityMapper;

    public MovieRepositoryGateway(MovieRepository movieRepository, MovieEntityMapper movieEntityMapper){
        this.movieRepository = movieRepository;
        this.movieEntityMapper = movieEntityMapper;
    }

    @Override
    public Movie save(Movie movie) {
        MovieEntity entity = movieEntityMapper.fromDomain(movie);
        MovieEntity savedEntity = movieRepository.save(entity);
        return movieEntityMapper.toDomain(savedEntity);
    }
}
