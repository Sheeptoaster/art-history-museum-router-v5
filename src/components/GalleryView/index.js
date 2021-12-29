import { useParams, Redirect, Route } from "react-router-dom";
import ArtDescription from "../ArtDescription";
import ArtImageTile from "../ArtImageTile";

function GalleryView({ galleries }) {
	const { galleryId } = useParams();
	const thisGallery = galleries.find(gallery => gallery.galleryid === parseInt(galleryId));
	if (thisGallery) {
		return (
			<div className="column">
				<h1 className="title">{thisGallery.name}</h1>
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
			</div>
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
