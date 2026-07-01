package com.cinaberk_api.infrastructure.persistence.room;

import com.cinaberk_api.domain.enums.ResourceType;
import com.cinaberk_api.domain.enums.RoomType;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

public class RoomEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(unique = true)
    private int number;

    @Column(nullable = false)
    private int capacity;

    @Enumerated(EnumType.STRING)
    @CollectionTable(name = "room_type", joinColumns = @JoinColumn(name = "room_id"))
    @Column(name = "room_type", nullable = false)
    private RoomType roomType;

    @Column(nullable = false)
    private String description;

    @ElementCollection
    @Enumerated(EnumType.STRING)
    @CollectionTable(name = "room_resources", joinColumns = @JoinColumn(name = "room_id"))
    @Column(name = "resource", nullable = false)
    private Set<ResourceType> resources;

    @Column(name = "poster_url", length = 1000)
    private String posterURL;

    @Column(nullable = false)
    private boolean active;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updateAt;

    public RoomEntity(){

    }

    public RoomEntity(
            UUID id,
            int number,
            int capacity,
            RoomType roomType,
            String description,
            Set<ResourceType> resources,
            String posterURL,
            boolean active
    ) {
        this.id = id;
        this.number = number;
        this.capacity = capacity;
        this.roomType = roomType;
        this.description = description;
        this.resources = resources;
        this.posterURL = posterURL;
        this.active = active;
    }

    public boolean isActive() {
        return active;
    }

    public String getPosterURL() {
        return posterURL;
    }

    public Set<ResourceType> getResources() {
        return resources;
    }

    public String getDescription() {
        return description;
    }

    public RoomType getRoomType() {
        return roomType;
    }

    public int getCapacity() {
        return capacity;
    }

    public int getNumber() {
        return number;
    }

    public UUID getId() {
        return id;
    }
}
