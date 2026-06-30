package com.cinaberk_api.pastaTemporaria.entity;

import com.cinaberk_api.domain.enums.ResourceType;
import com.cinaberk_api.domain.enums.RoomType;
import com.cinaberk_api.pastaTemporaria.exceptions.RoomDeactivatedException;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.*;

@Entity
@Table(name = "rooms")
public class Room {
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

    public Room(){

    }

    public Room(Integer number, Integer capacity, RoomType roomType, String description, String posterURL, Set<ResourceType> resources) {
        if (number == null || number <= 0) {
            throw new IllegalArgumentException("Numero da sala invalido");
        }

        if (capacity == null || capacity <= 0) {
            throw new IllegalArgumentException("Capacidade da sala invalido");
        }

        if (roomType == null) {
            throw new IllegalArgumentException("Tipo da sala invalido");
        }

        if(posterURL == null || posterURL.isBlank()){
            throw new IllegalArgumentException("Link da imagem inválida");
        }

        this.number = number;
        this.capacity = capacity;
        this.roomType = roomType;
        this.description = description;
        this.resources = new HashSet<>(resources);
        this.posterURL = posterURL;
        this.active = true;
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

    public boolean isActive() {
        return active;
    }

    public String getDescription() {
        return description;
    }

    public Set<ResourceType> getResources() {
        return resources;
    }

    public String getPosterURL() {
        return posterURL;
    }

    public Room updateRoom(Integer number, Integer capacity, RoomType roomType, String description, String posterURL, Set<ResourceType> resources){
        if(number != null){
            if(number <= 0){
                throw new IllegalArgumentException("Numero invalido");
            }
            this.number = number;
        }

        if(capacity != null){
            if(capacity <= 0){
                throw new IllegalArgumentException("Capacidade invalida");
            }
            this.capacity = capacity;
        }


        if(roomType == null) throw new IllegalArgumentException("Generos invalidos");
        this.roomType = roomType;

        if(description != null){
            if(description.isBlank()){
                throw new IllegalArgumentException("Descricao invalida");
            }
            this.description = description;
        }

        if(posterURL != null){
            if(posterURL.isBlank()){
                throw new IllegalArgumentException("Link da imagem invalida");
            }
            this.posterURL = posterURL;
        }

        if(resources != null){
            if(resources.isEmpty() || resources.contains(null)){
                throw new IllegalArgumentException("Recursos invalidos");
            }

            this.resources = new HashSet<>(resources);
        }
        return this;
    }

    public void addResource(ResourceType resource) {
        if(!this.active) throw new RoomDeactivatedException("Sala de numero " + this.number + " esta desativada");

        if (resource == null) {
            throw new IllegalArgumentException("Recurso invalido");
        }

        resources.add(resource);
    }

    public void removeResource(ResourceType resource) {
        if(!this.active) throw new RoomDeactivatedException("Sala de numero " + this.number + " esta desativada");

        if (resource == null) {
            throw new IllegalArgumentException("Recurso invalido");
        }

        resources.remove(resource);
    }

    public void deactivate(){
        this.active = false;
    }

    public void activate(){
        this.active = true;
    }

}
