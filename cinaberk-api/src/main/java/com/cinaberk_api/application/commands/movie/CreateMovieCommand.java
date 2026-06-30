package com.cinaberk_api.application.commands.movie;

import com.cinaberk_api.domain.enums.GenreType;

import java.time.LocalDateTime;
import java.util.List;

public record CreateMovieCommand(
        String title,
        String description,
        String synopsis,
        List<GenreType> genres,
        Integer durationInMinutos,
        Integer minimumAge,
        LocalDateTime availableAt
) {
}
