package com.cinaberk_api.pastaTemporaria.service;

import com.cinaberk_api.pastaTemporaria.dto.room.CreateRoomDTO;
import com.cinaberk_api.pastaTemporaria.dto.room.ResponseRoomDTO;
import com.cinaberk_api.pastaTemporaria.entity.Room;
import com.cinaberk_api.domain.enums.ResourceType;
import com.cinaberk_api.domain.enums.RoomType;
import com.cinaberk_api.pastaTemporaria.repository.RoomRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class RoomService {
    private final RoomRepository roomRepository;
    private final CloudinaryService cloudinaryService;

    public RoomService(RoomRepository roomRepository, CloudinaryService cloudinaryService){
        this.roomRepository = roomRepository;
        this.cloudinaryService = cloudinaryService;
    }

    public Page<ResponseRoomDTO> getAllRooms(
            RoomType type,
            ResourceType resource,
            Integer capacity,
            Pageable pageable
    ){
        Specification<Room> spec = ((root, query, criteriaBuilder) -> criteriaBuilder.isTrue(root.get("active")));
        if(type != null) spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.isMember(type, root.get("roomType")));
        if(resource != null) spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.isMember(type, root.get("resources")));
        if(capacity != null) spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("capacity"), capacity));

        return roomRepository.findAll(spec, pageable).map(ResponseRoomDTO::new);
    }

    public Room createRoom(CreateRoomDTO roomDTO, MultipartFile file){
        String posterURL = cloudinaryService.upload(file);
        Room room = new Room(
                roomDTO.number(),
                roomDTO.capacity(),
                roomDTO.roomType(),
                roomDTO.description(),
                posterURL,
                roomDTO.resources()
        );

        return roomRepository.save(room);
    }
}
