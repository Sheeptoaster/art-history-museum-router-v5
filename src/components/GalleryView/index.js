import { useParams, Redirect, Route } from "react-router-dom";
import ArtDescription from "../ArtDescription";
import ArtImageTile from "../ArtImageTile";

function GalleryView({ galleries }) {
	const { galleryId } = useParams();
	const thisGallery = galleries.find(gallery => gallery.galleryid === parseInt(galleryId));
	if (thisGallery) {
		return (
			<>
				<h2>{thisGallery.name}</h2>
				<div>{thisGallery.labeltext}</div>
				{
					thisGallery.objects.map((art) => {
						console.log(art);
						return (
							<>
								<Route key={art.id} exact path={`/galleries/:galleryId`}>
									<ArtImageTile key={art.id} art={art} galleryId={galleryId} />
								</Route>
							</>
						)
					}
					)
				}
				<Route path={`/galleries/:galleryId/art/:artId`}>
					<ArtDescription objects={thisGallery.objects}></ArtDescription>
				</Route>
			</>
		)
	} else {
		return (
			<>
				<Redirect to='/error-handling'></Redirect>
			</>
		)
	}
}

export default GalleryView;
