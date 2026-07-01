package com.cinaberk_api.presentation.controllers;

import com.cinaberk_api.application.commands.fileupload.FileUpload;
import com.cinaberk_api.application.commands.movie.CreateMovieCommand;
import com.cinaberk_api.application.commands.movie.EditMovieCommand;
import com.cinaberk_api.application.commands.movie.SearchMoviesCommand;
import com.cinaberk_api.application.usecases.movie.*;
import com.cinaberk_api.domain.entities.Movie;
import com.cinaberk_api.domain.enums.GenreType;
import com.cinaberk_api.presentation.dto.movie.RequestMovieDTO;
import com.cinaberk_api.presentation.dto.movie.ResponseMovieDTO;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tools.jackson.databind.ObjectMapper;
import org.springframework.data.domain.Pageable;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("cinebark-api/movies")
public class MovieController {
    private final FindMovieByIdUseCase findMovieByIdUseCase;
    private final FindAllMovieUseCase findAllMovieUseCase;
    private final FindHomeMoviesUseCase findHomeMoviesUseCase;
    private final CreateMovieUseCase createMovieUseCase;
    private final EditMovieUseCase editMovieUseCase;
    private final DeactivateMovieUseCase deactivateMovieUseCase;
    private final ActivateMovieUseCase activateMovieUseCase;
    private final ObjectMapper objectMapper;

    public MovieController(
            FindMovieByIdUseCase findMovieByIdUseCase,
            FindAllMovieUseCase findAllMovieUseCase,
            FindHomeMoviesUseCase findHomeMoviesUseCase,
            CreateMovieUseCase createMovieUseCase,
            EditMovieUseCase editMovieUseCase,
            DeactivateMovieUseCase deactivateMovieUseCase,
            ActivateMovieUseCase activateMovieUseCase,
            ObjectMapper objectMapper
    ){
        this.findMovieByIdUseCase = findMovieByIdUseCase;
        this.findAllMovieUseCase = findAllMovieUseCase;
        this.findHomeMoviesUseCase = findHomeMoviesUseCase;
        this.createMovieUseCase = createMovieUseCase;
        this.editMovieUseCase = editMovieUseCase;
        this.deactivateMovieUseCase = deactivateMovieUseCase;
        this.activateMovieUseCase = activateMovieUseCase;
        this.objectMapper = objectMapper;
    }

    @GetMapping
    ResponseEntity<List<ResponseMovieDTO>> findAll(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) GenreType genre,
            @RequestParam(required = false) Integer minimunAge,
            @RequestParam(required = false) String availability,
            @PageableDefault(page = 0, size = 10) Pageable pageable
    ){

        SearchMoviesCommand querys = new SearchMoviesCommand(
                search,
                genre,
                minimunAge,
                availability,
                pageable.getPageNumber(),
                pageable.getPageSize()
        );
        return ResponseEntity.status(HttpStatus.OK).body(findAllMovieUseCase.execute(querys).stream().map(ResponseMovieDTO::new).toList());
    }

    @GetMapping("/{id}")
    ResponseEntity<ResponseMovieDTO> findMovieById(@PathVariable UUID id){
        Movie movie = findMovieByIdUseCase.execute(id);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMovieDTO(movie));
    }

    @GetMapping("/home")
    ResponseEntity<List<ResponseMovieDTO>> findHomeMovies(){
        return ResponseEntity.status(HttpStatus.OK).body(findHomeMoviesUseCase.execute().stream().map(ResponseMovieDTO::new).toList());
    }

    @PostMapping
    public ResponseEntity<ResponseMovieDTO> createMovie(@RequestPart("movie") String movieJson, @RequestPart("file") MultipartFile file) throws IOException {
        RequestMovieDTO movieDTO = objectMapper.readValue(movieJson, RequestMovieDTO.class);
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

    @PatchMapping("/{id}")
    public ResponseEntity<ResponseMovieDTO> editMovie(
            @RequestPart(required = false, name = "movie") String movieJson,
            @RequestPart(required = false, name = "file") MultipartFile file,
            @PathVariable UUID id
    ) throws IOException
    {
        if(movieJson == null && file == null) return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

        RequestMovieDTO movieDTO = null;
        FileUpload poster = null;

        if(movieJson != null) {
            movieDTO = objectMapper.readValue(movieJson, RequestMovieDTO.class);
        }



        EditMovieCommand command = new EditMovieCommand(
                id,
                movieDTO != null ? movieDTO.title() : null,
                movieDTO != null ? movieDTO.description() : null,
                movieDTO != null ? movieDTO.synopsis() : null,
                movieDTO != null ? movieDTO.genres() : null,
                movieDTO != null ? movieDTO.durationInMinutos(): null,
                movieDTO != null ? movieDTO.minimumAge() : null,
                movieDTO != null ? movieDTO.availableAt() : null
            );

        if(file != null){
            poster = new FileUpload(
                    file.getBytes(),
                    file.getOriginalFilename(),
                    file.getContentType()
            );
        }
            Movie movie = editMovieUseCase.execute(command, poster);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMovieDTO(movie));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deactivate(@PathVariable UUID id){
        deactivateMovieUseCase.execute(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}")
    public ResponseEntity<Void> activate(@PathVariable UUID id){
        activateMovieUseCase.execute(id);
        return ResponseEntity.noContent().build();
    }
}
