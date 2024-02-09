import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`http://3.65.32.166/api/v2/storefront/products/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setBook(json.data);
      });
  }, [id]);

  return (
    <div className="details">
      <img
        src={book.attributes.book.image_url}
        alt={book.attributes.book.title}
        width={600}
      />
      <h3>title: {book.attributes.book.title}</h3>
      <p>
        price : {book.attributes.price} {book.attributes.currency}
      </p>
      <p>description : {book.attributes.book.description}</p>
    </div>
  );
};

export default Details;
