import React from 'react';
import NavItems from './../nav-items/nav-items.component';

const BookDetails = (props) => {
  const { title, authors, plot, thumbnail , infoLink } = props.book;
  const navItems = [
    {
      name: 'View',
      href: infoLink
    }
  ];

  return (
    <div className="book-wrapper">
      <div className="book-navbar">
        <h2 className="book-title">{title}</h2>
        <NavItems book={JSON.stringify(props.book)} navItems={navItems} handleFunction={props.handleFunction} action={props.action} view/>
      </div>

      <div className="details-wrapper">
        <h3 className="book-authors">{authors}</h3>
        <div className="description-img-wrapper">
          <img className="book-image" src={thumbnail} alt={title} />
           <p>{plot}</p>
        </div>
      </div>
      
    </div>
  )
}

export default BookDetails;