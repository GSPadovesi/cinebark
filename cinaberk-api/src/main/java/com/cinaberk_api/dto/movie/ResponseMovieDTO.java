package com.cinaberk_api.dto.movie;

import com.cinaberk_api.entity.Movie;
import com.cinaberk_api.enums.GenreType;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record ResponseMovieDTO(
        UUID id,
        String title,
        String description,
        String synopsis,
        List<GenreType> genres,
        int durationInMinutos,
        int minimumAge,
        String posterURL,
        LocalDateTime availableAt,
        boolean active
) {
    public ResponseMovieDTO(Movie movie) {
        this(
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
}
