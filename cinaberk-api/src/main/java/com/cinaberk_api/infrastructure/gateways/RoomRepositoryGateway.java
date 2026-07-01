package com.cinaberk_api.infrastructure.gateways;

import com.cinaberk_api.application.gateways.RoomGateway;
import com.cinaberk_api.domain.entities.Room;
import com.cinaberk_api.infrastructure.persistence.room.RoomEntity;
import com.cinaberk_api.infrastructure.persistence.room.RoomEntityMapper;
import com.cinaberk_api.infrastructure.persistence.room.RoomRepository;
import org.springframework.transaction.annotation.Transactional;

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
}
