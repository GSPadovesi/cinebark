package com.cinaberk_api.dto.movie;

import java.util.ArrayList;
import java.util.List;

public record ListMovieDTO(
        List<ResponseMovieDTO> available,
        List<ResponseMovieDTO> preSale,
        List<ResponseMovieDTO> soon
) {
    public ListMovieDTO() {
        this(new ArrayList<>(), new ArrayList<>(), new ArrayList<>());
    }

    public void addAvailable(ResponseMovieDTO movie) {
        available.add(movie);
    }

    public void addPreSale(ResponseMovieDTO movie) {
        preSale.add(movie);
    }

    public void addSoon(ResponseMovieDTO movie) {
        soon.add(movie);
    }

    public void merge(ListMovieDTO other) {
        available.addAll(other.available);
        preSale.addAll(other.preSale);
        soon.addAll(other.soon);
    }
}
