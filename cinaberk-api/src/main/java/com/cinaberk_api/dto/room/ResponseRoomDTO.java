package com.cinaberk_api.dto.room;

import com.cinaberk_api.entity.Room;
import com.cinaberk_api.enums.ResourceType;
import com.cinaberk_api.enums.RoomType;

import java.util.Set;
import java.util.UUID;

public record ResponseRoomDTO(
        UUID id,
        int number,
        int capacity,
        RoomType roomType,
        String description,
        Set<ResourceType> resources,
        boolean active

) {
    public ResponseRoomDTO(Room room){
        this(
                room.getId(),
                room.getNumber(),
                room.getCapacity(),
                room.getRoomType(),
                room.getDescription(),
                Set.copyOf(room.getResources()),
                room.isActive()
        );
    }
}
