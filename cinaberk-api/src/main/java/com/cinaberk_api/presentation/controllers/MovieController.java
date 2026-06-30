package com.cinaberk_api.presentation.controllers;

import com.cinaberk_api.application.commands.fileupload.FileUpload;
import com.cinaberk_api.application.commands.movie.CreateMovieCommand;
import com.cinaberk_api.application.usecases.movie.CreateMovieUseCase;
import com.cinaberk_api.domain.entities.Movie;
import com.cinaberk_api.presentation.dto.movie.CreateMovieDTO;
import com.cinaberk_api.presentation.dto.movie.ResponseMovieDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("cinebark-api/movies")
public class MovieController {
    private final CreateMovieUseCase createMovieUseCase;
    private final ObjectMapper objectMapper;

    public MovieController(CreateMovieUseCase createMovieUseCase, ObjectMapper objectMapper){
        this.createMovieUseCase = createMovieUseCase;
        this.objectMapper = objectMapper;
    }

    @PostMapping
    public ResponseEntity<ResponseMovieDTO> createMovie(@RequestPart("movie") String movieJson, @RequestPart("file") MultipartFile file) throws IOException {
        CreateMovieDTO movieDTO = objectMapper.readValue(movieJson, CreateMovieDTO.class);
        FileUpload poster = new FileUpload(
                file.getBytes(),
                file.getOriginalFilename(),
                file.getContentType()
        );
        CreateMovieCommand command = new CreateMovieCommand(
                movieDTO.title(),
                movieDTO.description(),
                movieDTO.synopsis(),
                movieDTO.genres(),
                movieDTO.durationInMinutos(),
                movieDTO.minimumAge(),
                movieDTO.availableAt()
        );

        Movie movie = createMovieUseCase.execute(command, poster);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseMovieDTO(movie));
    }
}
