import { useParams, Redirect } from "react-router-dom";

function GalleryView({ galleries }) {
	const { galleryId } = useParams();
	const thisGallery = galleries.find(gallery => gallery.galleryid === parseInt(galleryId));
	if (thisGallery) {
		return (
			<>
				<h2>{thisGallery.name}</h2>
				<div>{thisGallery.labeltext}</div>
			</>
		)
	} else {
		return (
			<>
				<Redirect to='/a;efioawe'></Redirect>
			</>
		)
	}
}

export default GalleryView;
