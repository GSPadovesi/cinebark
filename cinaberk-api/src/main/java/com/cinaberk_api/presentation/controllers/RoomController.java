package com.cinaberk_api.presentation.controllers;

import com.cinaberk_api.application.usecases.room.CreateRoomUseCase;
import com.cinaberk_api.presentation.dto.movie.ResponseMovieDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tools.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("cinebark-api/rooms")
public class RoomController {

    private final CreateRoomUseCase createRoomUseCase;
    private final ObjectMapper objectMapper;

    public RoomController(CreateRoomUseCase createRoomUseCase, ObjectMapper objectMapper){
        this.createRoomUseCase = createRoomUseCase;
        this.objectMapper = objectMapper;
    }

    @GetMapping
    public ResponseEntity<ResponseMovieDTO> findAll(){
        return ResponseEntity.ok().build();
    }
}
