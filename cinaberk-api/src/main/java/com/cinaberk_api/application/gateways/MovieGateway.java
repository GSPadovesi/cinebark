package com.cinaberk_api.application.gateways;

import com.cinaberk_api.domain.entities.Movie;

public interface MovieGateway {
    Movie save(Movie movie);
}
