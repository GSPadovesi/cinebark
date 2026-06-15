package com.cinaberk_api.exceptions;

public class RoomDeactivatedException extends RuntimeException {
    public RoomDeactivatedException(String message) {
        super(message);
    }
}
