package com.cinaberk_api.infrastructure.persistence.movie;

import com.cinaberk_api.domain.entities.Movie;

public class MovieEntityMapper {
    public MovieEntity fromDomain(Movie movie) {
        return new MovieEntity(
                movie.getId(),
                movie.getTitle(),
                movie.getDescription(),
                movie.getSynopsis(),
                movie.getGenres(),
                movie.getDurationInMinutos(),
                movie.getMinimumAge(),
                movie.getPosterURL(),
                movie.getAvailableAt(),
                movie.isActive()
        );
    }

    public Movie toDomain(MovieEntity entity) {
        return Movie.restore(
                entity.getId(),
                entity.getTitle(),
                entity.getDescription(),
                entity.getSynopsis(),
                entity.getGenres(),
                entity.getDurationInMinutos(),
                entity.getMinimumAge(),
                entity.getPosterURL(),
                entity.isActive(),
                entity.getAvailableAt()
        );
    }
}
