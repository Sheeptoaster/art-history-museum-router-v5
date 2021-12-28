import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import './ArtImageTile.css'

const ArtImageTile = ({ art, galleryId }) => {
    // console.log(art.images)
    if (art.images.length !== 0) {
        return (
            <Link to={`/galleries/${galleryId}/art/${art.id}`}>
                <img className="galleryImageDisplay" id={art.images[0].imageid} src={art.images[0].baseimageurl} />
            </Link>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default ArtImageTile;
