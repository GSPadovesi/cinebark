package com.cinaberk_api.application.gateways;

import com.cinaberk_api.application.commands.movie.SearchMoviesCommand;
import com.cinaberk_api.domain.entities.Room;

import java.util.List;
import java.util.UUID;

public interface RoomGateway {
    Room save(Room room);
    Room findById(UUID id);
    List<Room> findAll(SearchMoviesCommand query);
}