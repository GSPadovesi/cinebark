package com.cinaberk_api.application.commands.room;

import com.cinaberk_api.domain.enums.ResourceType;
import com.cinaberk_api.domain.enums.RoomType;

import java.util.Set;

public record CreateRoomCommand(
        Integer number,
        Integer capacity,
        RoomType roomType,
        String description,
        Set<ResourceType> resources
) {
}
