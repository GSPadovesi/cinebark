package com.cinaberk_api.entity;

import com.cinaberk_api.enums.GenreType;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID) @Column(nullable = false, updatable = false)
    private UUID id;
    @Column(nullable = false, unique = true, length = 150)
    private String title;
    @Column(length = 500)
    private String description;
    @Column(columnDefinition = "TEXT")
    private String synopsis;
    @ElementCollection
    @Enumerated(EnumType.STRING)
    @CollectionTable(name = "movie_genres", joinColumns = @JoinColumn(name = "movie_id"))
    @Column(name = "genre", nullable = false)
    private List<GenreType> genres;
    @Column(name = "duration_in_minutes", nullable = false)
    int durationInMinutos;
    @Column(name = "minimum_age", nullable = false)
    private int minimumAge;
    @Column(name = "poster_url", length = 1000)
    private String posterURL;
    @Column(name = "available_at")
    private LocalDateTime availableAt;
    @Column(nullable = false)
    private boolean active;
    @CreationTimestamp @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    @UpdateTimestamp @Column(name = "updated_at")
    private LocalDateTime updateAt;

    public Movie(){

    }

    public Movie(String title, String description, String synopsis, List<GenreType> genres, Integer durationInMinutos, Integer minimumAge, String posterURL, LocalDateTime availableAt){
        if(title == null || title.isBlank()){
            throw new IllegalArgumentException("Título inválido");
        }

        if(description == null || description.isBlank()){
            throw new IllegalArgumentException("Descrição inválida");
        }

        if(synopsis == null || synopsis.isBlank()){
            throw new IllegalArgumentException("Sinopse Inválida");
        }

        if(genres == null || genres.isEmpty() || genres.contains(null)){
            throw new IllegalArgumentException("Generos invalidos");
        }

        if(durationInMinutos == null || durationInMinutos <= 0){
            throw new IllegalArgumentException("Duração inválida");
        }

        if(minimumAge == null || minimumAge < 0){
            throw new IllegalArgumentException("Idade minima inválida");
        }

        if(posterURL == null || posterURL.isBlank()){
            throw new IllegalArgumentException("Link da imagem inválida");
        }

        if(availableAt == null){
            throw new IllegalArgumentException("Data de disponibilidade inválida");
        }

        this.title = title;
        this.description = description;
        this.synopsis = synopsis;
        this.genres = new ArrayList<>(genres);
        this.durationInMinutos = durationInMinutos;
        this.minimumAge = minimumAge;
        this.posterURL = posterURL;
        this.availableAt = availableAt;
        this.active = true;
    }

    public UUID getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public List<GenreType> getGenres() {
        return genres;
    }

    public int getDurationInMinutos() {
        return durationInMinutos;
    }

    public int getMinimumAge() {
        return minimumAge;
    }

    public String getPosterURL() {
        return posterURL;
    }

    public LocalDateTime getAvailableAt() {
        return availableAt;
    }

    public boolean isActive() {
        return active;
    }

    public Movie updateMovie(String title, String description, String synopsis, List<GenreType> genres, Integer durationInMinutos, Integer minimumAge, String posterURL, LocalDateTime availableAt){
        if(title != null){
            if(title.isBlank()){
                throw new IllegalArgumentException("Titulo invalido");
            }
            this.title = title;
        }

        if(description != null){
            if(description.isBlank()){
                throw new IllegalArgumentException("Descricao invalida");
            }
            this.description = description;
        }

        if(synopsis != null){
            if(synopsis.isBlank()){
                throw new IllegalArgumentException("Sinopse invalida");
            }
            this.synopsis = synopsis;
        }

        if(genres != null){
            if(genres.isEmpty() || genres.contains(null)){
                throw new IllegalArgumentException("Generos invalidos");
            }
            this.genres = new ArrayList<>(genres);
        }

        if(durationInMinutos != null){
            if(durationInMinutos <= 0){
                throw new IllegalArgumentException("Duracao invalida");
            }
            this.durationInMinutos = durationInMinutos;
        }

        if(minimumAge != null){
            if(minimumAge < 0){
                throw new IllegalArgumentException("Idade minima invalida");
            }
            this.minimumAge = minimumAge;
        }

        if(posterURL != null){
            if(posterURL.isBlank()){
                throw new IllegalArgumentException("Link da imagem invalida");
            }
            this.posterURL = posterURL;
        }

        if(availableAt != null){
            this.availableAt = availableAt;
        }

        return this;
    }
}
