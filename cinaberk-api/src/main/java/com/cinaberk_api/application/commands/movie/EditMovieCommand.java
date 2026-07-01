package com.cinaberk_api.application.commands.movie;

import com.cinaberk_api.domain.enums.GenreType;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record EditMovieCommand(
        UUID id,
        String title,
        String description,
        String synopsis,
        List<GenreType> genres,
        Integer durationInMinutos,
        Integer minimumAge,
        LocalDateTime availableAt
) {}
