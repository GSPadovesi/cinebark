package com.cinaberk_api.application.usecases.movie;

import com.cinaberk_api.application.commands.fileupload.FileUpload;
import com.cinaberk_api.application.commands.movie.CreateMovieCommand;
import com.cinaberk_api.application.gateways.ImageStorageGateway;
import com.cinaberk_api.application.gateways.MovieGateway;
import com.cinaberk_api.domain.entities.Movie;

public class CreateMovieUseCase {
    private final MovieGateway movieGateway;
    private final ImageStorageGateway imageStorageGateway;

    public CreateMovieUseCase(MovieGateway movieGateway, ImageStorageGateway imageStorageGateway){
        this.movieGateway = movieGateway;
        this.imageStorageGateway = imageStorageGateway;
    }

    public Movie execute(CreateMovieCommand command, FileUpload file){
        String posterURL = imageStorageGateway.upload(file);

        Movie movie = Movie.create(
                command.title(),
                command.description(),
                command.synopsis(),
                command.genres(),
                command.durationInMinutos(),
                command.minimumAge(),
                posterURL,
                command.availableAt()
        );

        return movieGateway.save(movie);
    }
}
