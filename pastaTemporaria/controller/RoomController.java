package com.cinaberk_api.pastaTemporaria.controller;

import com.cinaberk_api.pastaTemporaria.dto.room.CreateRoomDTO;
import com.cinaberk_api.pastaTemporaria.dto.room.ResponseRoomDTO;
import com.cinaberk_api.pastaTemporaria.entity.Room;
import com.cinaberk_api.domain.enums.ResourceType;
import com.cinaberk_api.domain.enums.RoomType;
import com.cinaberk_api.pastaTemporaria.service.RoomService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tools.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("cinebark-api/rooms")
public class RoomController {
    private final RoomService roomService;
    private final ObjectMapper objectMapper;

    public RoomController(RoomService roomService, ObjectMapper objectMapper){
        this.roomService = roomService;
        this.objectMapper = objectMapper;
    }

    @GetMapping
    public ResponseEntity<Page<ResponseRoomDTO>> getAllRooms(
            @RequestParam(required = false) RoomType type,
            @RequestParam(required = false) ResourceType resource,
            @RequestParam(required = false) Integer capacity,
            @PageableDefault(
                    page = 0,
                    size = 5
            ) Pageable pageable
    ){
        return ResponseEntity.status(HttpStatus.OK).body(roomService.getAllRooms(type, resource, capacity, pageable));
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseRoomDTO> createRoom(@RequestPart("room") String roomJson, @RequestPart("file") MultipartFile file){
        CreateRoomDTO roomDTO = objectMapper.readValue(roomJson, CreateRoomDTO.class);
        Room room = roomService.createRoom(roomDTO, file);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseRoomDTO(room));
    }
}
