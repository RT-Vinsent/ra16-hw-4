import React, { useState } from 'react';
import './Gallery.css'
import ImageBlock from '../ImageBlock/ImageBlock'

interface GalleryImages {
  fileName: string;
  fileUrl: string;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImages[]>([
    {
      fileName: 'Хакер',
      fileUrl: 'https://xakep.ru/wp-content/uploads/2022/09/400775/Hacked.jpg',
    },
    {
      fileName: 'Разработка',
      fileUrl: 'https://stekspb.ru/upload/%20custom_projects_img/web-teh-audit.jpg',
    },
  ]);

  const fileToDataUrl = (file: File) => {
    return new Promise<{ fileName: string, fileUrl: string }>((resolve, reject) => {
      const fileReader = new FileReader();
  
      fileReader.addEventListener('load', () => {
        const dataURL = fileReader.result as string;
        resolve({ fileName: file.name, fileUrl: dataURL });
      });
      
      fileReader.addEventListener('error', () => {
        const error = fileReader.error;
        if (error instanceof DOMException) {
          reject(new Error(error.message));
        } else {
          reject(new Error("Произошла ошибка при чтении файла"));
        }
      });
      
      fileReader.readAsDataURL(file);
    });
  }

  // загрузка картинки в инпут
  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { target } = event;

    if (!target.files) return;
    const files: File[] = Array.from(target.files);

    const newImages = await Promise.all(files.map(o => fileToDataUrl(o)));
    setImages((prevImages) => [...prevImages, ...newImages]);
    // target.value = ''; // очистка импута
  }

  // удаление картинки
  const onDeleteImage = (index: number) => {
    const newImager = [...images];
    newImager.splice(index, 1)
    setImages(newImager);
  }

  return (
    <div className="container">
      <h2>Менеджер фото (задача со звёздочкой)</h2>
      <div className="gallery-wrap">
        <div className="gallery-container">
          <form data-id="gallery-form" className="gallery-form">
            <div data-id="gallery-file" className="gallery-file-container">
              <input 
                className="gallery-file-input"
                type="file"
                multiple
                accept=".jpg, .jpeg, .png"
                onChange={onInputChange}
              />
              <label className="gallery-file-label">
                Перетащите файл сюда или нажмите, чтобы выбрать
              </label>
            </div>
          </form>
          <div className="gallery-header">Галерея фотографий</div>
          <div data-id="container-galery-img" className="container-galery-img">
            {images.map((image, index) => (
              <ImageBlock 
                key={index}
                fileName={image.fileName}
                fileUrl={image.fileUrl}
                onDeleteImage={() => onDeleteImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
