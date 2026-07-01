package com.cinaberk_api.domain.entities;

import com.cinaberk_api.domain.enums.GenreType;
import com.cinaberk_api.domain.enums.ResourceType;
import com.cinaberk_api.domain.enums.RoomType;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

public class Room {
    private final UUID id;
    private int number;
    private int capacity;
    private RoomType roomType;
    private String description;
    private Set<ResourceType> resources;
    private String posterURL;
    private boolean active;

    private Room(
            UUID id,
            Integer number,
            Integer capacity,
            RoomType roomType,
            String description,
            Set<ResourceType> resources,
            String posterURL,
            boolean active
    ) {
        this.id = id;
        setNumber(number);
        setCapacity(capacity);
        setRoomType(roomType);
        setDescription(description);
        setResources(resources);
        setPosterURL(posterURL);
        this.active = active;
    }

    public static Room create(
            Integer number,
            Integer capacity,
            RoomType roomType,
            String description,
            Set<ResourceType> resources,
            String posterURL
    ) {
        return new Room(null, number, capacity, roomType, description, resources, posterURL, true);
    }

    public static Room restore(
            UUID id,
            Integer number,
            Integer capacity,
            RoomType roomType,
            String description,
            Set<ResourceType> resources,
            String posterURL,
            Boolean active
    ) {
        return new Room(id, number, capacity, roomType, description, resources, posterURL, active);
    }

    public void update(
            Integer number,
            Integer capacity,
            RoomType roomType,
            String description,
            Set<ResourceType> resources
    ) {
        if (number != null) {
            setNumber(number);
        }

        if (capacity != null) {
            setCapacity(capacity);
        }

        if (roomType != null) {
            setRoomType(roomType);
        }

        if (description != null) {
            setDescription(description);
        }

        if (resources != null) {
            setResources(resources);
        }
    }

    public void addResource(ResourceType resource) {
        ensureActive();

        if (resource == null) {
            throw new IllegalArgumentException("Recurso invalido");
        }

        resources.add(resource);
    }

    public void removeResource(ResourceType resource) {
        ensureActive();

        if (resource == null) {
            throw new IllegalArgumentException("Recurso invalido");
        }

        resources.remove(resource);
    }

    public void deactivate() {
        this.active = false;
    }

    public void activate() {
        this.active = true;
    }

    public void changePosterURL(String posterURL){
        this.setPosterURL(posterURL);
    }


    private void ensureActive() {
        if (!active) {
            throw new IllegalStateException("Sala de numero " + number + " esta desativada");
        }
    }

    private void setNumber(Integer number) {
        requirePositive(number, "Numero da sala invalido");
        this.number = number;
    }

    private void setCapacity(Integer capacity) {
        requirePositive(capacity, "Capacidade da sala invalida");
        this.capacity = capacity;
    }

    private void setRoomType(RoomType roomType) {
        if (roomType == null) {
            throw new IllegalArgumentException("Tipo da sala invalido");
        }

        this.roomType = roomType;
    }

    private void setDescription(String description) {
        requireText(description, "Descricao invalida");
        this.description = description;
    }

    private void setResources(Set<ResourceType> resources) {
        if (resources == null || resources.isEmpty() || resources.contains(null)) {
            throw new IllegalArgumentException("Recursos invalidos");
        }

        this.resources = new HashSet<>(resources);
    }

    private void setPosterURL(String posterURL) {
        requireText(posterURL, "Link da imagem invalida");
        this.posterURL = posterURL;
    }

    private static void requirePositive(Integer value, String message) {
        if (value == null || value <= 0) {
            throw new IllegalArgumentException(message);
        }
    }

    private static void requireText(String value, String message) {
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException(message);
        }
    }

    public UUID getId() {
        return id;
    }

    public int getNumber() {
        return number;
    }

    public int getCapacity() {
        return capacity;
    }

    public RoomType getRoomType() {
        return roomType;
    }

    public String getDescription() {
        return description;
    }

    public Set<ResourceType> getResources() {
        return Set.copyOf(resources);
    }

    public String getPosterURL() {
        return posterURL;
    }

    public boolean isActive() {
        return active;
    }
}
