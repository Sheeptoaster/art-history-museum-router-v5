import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

function GalleryNavigation({ galleries }) {
	return (
		<nav className='navbar is-centered'>
			<div className='title column'>Harvard Art Museum</div>
			<NavLink exact to='/' className="navbar-item column">Home</NavLink>
			<div className='navbar-item has-dropdown is-hoverable column'>
				<div className='navbar-link'>Galleries</div>
				<div className='navbar-dropdown'>
					{
						galleries.map((gallery) => (
							<NavLink key={gallery.id} to={`/galleries/${gallery.id}`} className="navbar-item">
								{gallery.name}
							</NavLink>
						))
					}
				</div>
			</div>
		</nav>
	)
}


export default GalleryNavigation;
