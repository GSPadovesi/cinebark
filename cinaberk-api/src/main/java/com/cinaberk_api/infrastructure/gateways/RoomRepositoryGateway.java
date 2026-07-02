package com.cinaberk_api.infrastructure.gateways;

import com.cinaberk_api.application.commands.movie.SearchMoviesCommand;
import com.cinaberk_api.application.gateways.RoomGateway;
import com.cinaberk_api.domain.entities.Room;
import com.cinaberk_api.infrastructure.persistence.room.RoomEntity;
import com.cinaberk_api.infrastructure.persistence.room.RoomEntityMapper;
import com.cinaberk_api.infrastructure.persistence.room.RoomRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

public class RoomRepositoryGateway implements RoomGateway {
    private final RoomRepository roomRepository;
    private final RoomEntityMapper roomEntityMapper;

    public RoomRepositoryGateway(RoomRepository roomRepository, RoomEntityMapper roomEntityMapper){
        this.roomRepository = roomRepository;
        this.roomEntityMapper = roomEntityMapper;
    }

    @Transactional
    @Override
    public Room save(Room room){
        RoomEntity savedRoom = roomRepository.save(roomEntityMapper.fromDomain(room));
        return roomEntityMapper.toDomain(savedRoom);
    }

    @Transactional(readOnly = true)
    @Override
    public Room findById(UUID id) {
        return null;
    }

    @Transactional
    @Override
    public List<Room> findAll(SearchMoviesCommand query) {
        return List.of();
    }
}
