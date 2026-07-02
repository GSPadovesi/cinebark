package com.cinaberk_api.infrastructure.config;

import com.cinaberk_api.application.gateways.ImageStorageGateway;
import com.cinaberk_api.application.gateways.RoomGateway;
import com.cinaberk_api.application.usecases.room.CreateRoomUseCase;
import com.cinaberk_api.infrastructure.gateways.RoomRepositoryGateway;
import com.cinaberk_api.infrastructure.persistence.room.RoomEntityMapper;
import com.cinaberk_api.infrastructure.persistence.room.RoomRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RoomConfig {
    @Bean
    public CreateRoomUseCase createRoomUseCase(
            RoomGateway roomGateway,
            ImageStorageGateway imageStorageGateway

    ){
        return new CreateRoomUseCase(roomGateway, imageStorageGateway);
    }

    @Bean
    public RoomGateway roomGateway(
            RoomRepository roomRepository,
            RoomEntityMapper roomEntityMapper
    ) {
        return new RoomRepositoryGateway(roomRepository, roomEntityMapper);
    }

    @Bean
    public RoomEntityMapper roomEntityMapper(){
        return new RoomEntityMapper();
    }
}
