package com.cinaberk_api.controller;

import com.cinaberk_api.dto.movie.CreateMovieDTO;
import com.cinaberk_api.dto.movie.ResponseMovieDTO;
import com.cinaberk_api.entity.Movie;
import com.cinaberk_api.service.MovieService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tools.jackson.databind.ObjectMapper;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("cinebark-api/movies")
public class MovieController {
    private final MovieService movieService;
    private final ObjectMapper objectMapper;

    public MovieController(MovieService movieService, ObjectMapper objectMapper){
        this.movieService = movieService;
        this.objectMapper = objectMapper;
    }

    @GetMapping("/home")
    public ResponseEntity<List<ResponseMovieDTO>> findTenRandomAvailableMovies(){
        List<ResponseMovieDTO> moviesTopTen = movieService.findTenRandomAvailableMovies().stream().map(ResponseMovieDTO::new).toList();
        return ResponseEntity.status(HttpStatus.OK).body(moviesTopTen);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseMovieDTO> createMovie(@RequestPart("movie") String movieJson, @RequestPart("file")MultipartFile file){
        CreateMovieDTO movieDTO = objectMapper.readValue(movieJson, CreateMovieDTO.class);
        Movie movie = movieService.createMovie(movieDTO, file);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseMovieDTO(movie));
    }
}
