export const uploadImage = async (file: File) => {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', 'cinebark');

  const response = await fetch('https://api.cloudinary.com/v1_1/djuycjg79/image/upload', {
      method: 'POST',
      body: formData,
    }
  );

  return response.json();
};