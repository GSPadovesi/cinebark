package com.cinaberk_api.application.usecases.room;

import com.cinaberk_api.application.commands.fileupload.FileUpload;
import com.cinaberk_api.application.commands.room.CreateRoomCommand;
import com.cinaberk_api.application.gateways.ImageStorageGateway;
import com.cinaberk_api.application.gateways.MovieGateway;
import com.cinaberk_api.application.gateways.RoomGateway;
import com.cinaberk_api.domain.entities.Room;
import com.cinaberk_api.domain.enums.ResourceType;
import com.cinaberk_api.domain.enums.RoomType;

import java.util.Set;

public class CreateRoomUseCase {
    private final RoomGateway roomGateway;
    private final ImageStorageGateway imageStorageGateway;

    public CreateRoomUseCase(RoomGateway roomGateway,ImageStorageGateway imageStorageGateway){
        this.roomGateway = roomGateway;
        this.imageStorageGateway = imageStorageGateway;
    }

    public Room execute(CreateRoomCommand command, FileUpload file){
        String posterUrl = imageStorageGateway.upload(file);

        Room room = Room.create(
                command.number(),
                command.capacity(),
                command.roomType(),
                command.description(),
                command.resources(),
                posterUrl
        );

        return roomGateway.save(room);
    }

}
