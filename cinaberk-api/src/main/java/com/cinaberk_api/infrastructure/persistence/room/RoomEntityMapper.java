package com.cinaberk_api.infrastructure.persistence.room;

import com.cinaberk_api.domain.entities.Room;

public class RoomEntityMapper {

    public RoomEntity fromDomain(Room room){
        return new RoomEntity(
                room.getId(),
                room.getNumber(),
                room.getCapacity(),
                room.getRoomType(),
                room.getDescription(),
                room.getResources(),
                room.getPosterURL(),
                room.isActive()
        );
    }

    public Room toDomain(RoomEntity roomEntity){
        return Room.restore(
                roomEntity.getId(),
                roomEntity.getNumber(),
                roomEntity.getCapacity(),
                roomEntity.getRoomType(),
                roomEntity.getDescription(),
                roomEntity.getResources(),
                roomEntity.getPosterURL(),
                roomEntity.isActive()
        );
    }
}
