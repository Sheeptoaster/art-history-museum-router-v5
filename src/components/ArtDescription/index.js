import { Link, useParams } from "react-router-dom";

const ArtDescription = ({ objects }) => {
	const { artId, galleryId } = useParams();
	const art = objects.find(art => {
		if (art.id == artId) {
			return true;
		} else {
			return false;
		}
	})
	console.log(art);
	return (
		<>
			<a href={art.url}>{art.title}</a>
			<img src={art.images[0].baseimageurl} className="galleryImageDisplay"/>
			<Link to={`/galleries/${galleryId}`}>Back to Gallery</Link>
		</>
	)
}

export default ArtDescription;
