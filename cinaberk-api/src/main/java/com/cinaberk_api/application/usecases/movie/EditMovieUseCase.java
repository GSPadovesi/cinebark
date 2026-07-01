package com.cinaberk_api.application.usecases.movie;

import com.cinaberk_api.application.commands.fileupload.FileUpload;
import com.cinaberk_api.application.commands.movie.EditMovieCommand;
import com.cinaberk_api.application.gateways.ImageStorageGateway;
import com.cinaberk_api.application.gateways.MovieGateway;
import com.cinaberk_api.domain.entities.Movie;

public class EditMovieUseCase {
    private final MovieGateway movieGateway;
    private final ImageStorageGateway imageStorageGateway;

    public EditMovieUseCase(MovieGateway movieGateway, ImageStorageGateway imageStorageGateway){
        this.movieGateway = movieGateway;
        this.imageStorageGateway = imageStorageGateway;
    }

    public Movie execute(EditMovieCommand command, FileUpload file){
        Movie movie = movieGateway.findById(command.id());
        String posterUrl = null;

        if(file != null) posterUrl = imageStorageGateway.upload(file);

        movie.update(
                command.title(),
                command.description(),
                command.synopsis(),
                command.genres(),
                command.durationInMinutos(),
                command.minimumAge(),
                posterUrl,
                command.availableAt()
        );

        return movieGateway.save(movie);
    }
}
