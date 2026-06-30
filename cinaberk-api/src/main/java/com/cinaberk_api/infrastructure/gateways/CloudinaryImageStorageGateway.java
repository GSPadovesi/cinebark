package com.cinaberk_api.infrastructure.gateways;

import com.cinaberk_api.application.commands.fileupload.FileUpload;
import com.cinaberk_api.application.gateways.ImageStorageGateway;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;

@Component
public class CloudinaryImageStorageGateway implements ImageStorageGateway {
    private final Cloudinary cloudinary;

    public CloudinaryImageStorageGateway(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    @Override
    public String upload(FileUpload file) {
        try {
            Map result = cloudinary.uploader().upload(
                    file.content(),
                    ObjectUtils.asMap(
                            "folder", "cinebark",
                            "resource_type", "image"
                    )
            );

            return result.get("secure_url").toString();
        } catch (IOException e) {
            throw new RuntimeException("Erro ao fazer upload da imagem", e);
        }
    }
}
