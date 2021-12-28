import { useParams, Redirect, Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import ArtImageTile from "../ArtImageTile";




function GalleryView({ galleries }) {
	const { galleryId } = useParams();
	const thisGallery = galleries.find(gallery => gallery.galleryid === parseInt(galleryId));
	// console.log(thisGallery)
	if (thisGallery) {
		return (
			<>
				<h2>{thisGallery.name}</h2>
				<div>{thisGallery.labeltext}</div>
				{
					thisGallery.objects.map((image) => {
						// return (
						// 	<ArtImageTile key={image.id} art={image} galleryId={galleryId}></ArtImageTile>
						// )
						return (
							<Route key={image.id} path={`/galleries/:galleryId`}>
								<ArtImageTile key={image.id} art={image} galleryId={galleryId} />
							</Route>
						)
					}
					)
				}
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
