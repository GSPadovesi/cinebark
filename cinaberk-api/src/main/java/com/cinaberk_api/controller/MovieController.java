package com.cinaberk_api.controller;

import com.cinaberk_api.dto.movie.CreateMovieDTO;
import com.cinaberk_api.dto.movie.ResponseMovieDTO;
import com.cinaberk_api.entity.Movie;
import com.cinaberk_api.service.MovieService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import tools.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("cinebark-api/movies")
public class MovieController {
    private final MovieService movieService;
    private final ObjectMapper objectMapper;

    public MovieController(MovieService movieService, ObjectMapper objectMapper){
        this.movieService = movieService;
        this.objectMapper = objectMapper;
    }


    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseMovieDTO> createMovie(@RequestPart("movie") String movieJson, @RequestPart("file")MultipartFile file){
        CreateMovieDTO movieDTO = objectMapper.readValue(movieJson, CreateMovieDTO.class);
        Movie movie = movieService.createMovie(movieDTO, file);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseMovieDTO(movie));
    }
}
