package com.cinaberk_api.application.commands.fileupload;

public record FileUpload(
        byte[] content,
        String filename,
        String contentType
) {
}
