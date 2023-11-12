import './ImageBlock.css';

interface GalleryImages {
  fileName: string;
  fileUrl: string;
  onDeleteImage: (event: any) => void;
}

export default function ImageBlock({ fileName, fileUrl, onDeleteImage }: GalleryImages) {
  return (
    <div className="gallery-figure">
      <img className="galery-img" src={fileUrl} alt={fileName}/>
      <figcaption>{fileName}</figcaption>
      <div data-id="img-del" onClick={onDeleteImage}>X</div>
    </div>
  );
}