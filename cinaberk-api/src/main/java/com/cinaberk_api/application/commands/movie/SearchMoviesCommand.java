package com.cinaberk_api.application.commands.movie;

import com.cinaberk_api.domain.enums.GenreType;

public record SearchMoviesCommand(
        String search,
        GenreType genre,
        Integer minimunAge,
        String availability,
        Integer page,
        Integer size
) {
}
