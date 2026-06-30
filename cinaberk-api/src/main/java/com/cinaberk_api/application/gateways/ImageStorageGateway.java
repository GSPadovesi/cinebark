package com.cinaberk_api.application.gateways;

import com.cinaberk_api.application.commands.fileupload.FileUpload;

public interface ImageStorageGateway {
    String upload(FileUpload file);
}
