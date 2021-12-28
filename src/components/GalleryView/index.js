import { useParams } from "react-router-dom";

function GalleryView({ galleries }) {
	const { galleryId } = useParams();
	const thisGallery = galleries.find(gallery => gallery.galleryid === parseInt(galleryId));
	return (
		<>
			<h2>{thisGallery.name}</h2>
			<div>{thisGallery.labeltext}</div>
		</>
	)
}

export default GalleryView;
