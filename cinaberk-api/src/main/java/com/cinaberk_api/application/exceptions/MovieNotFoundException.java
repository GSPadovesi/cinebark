package com.cinaberk_api.application.exceptions;

import java.util.UUID;

public class MovieNotFoundException extends RuntimeException {
    public MovieNotFoundException(UUID id) {
        super("Filme nao encontrado: " + id);
    }
}
