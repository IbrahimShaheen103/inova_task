import "./style.css";
import { useEffect, useState } from "react";
import { Card } from "../../components";
const BookLis = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(
      "http://3.65.32.166/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book"
    )
      .then((response) => response.json())
      .then((json) => {
        setBooks(json.data);
      });
  }, []);
  return (
    <div>
      <h1>E-Books</h1>
      {books &&
        books.map((book) => (
          <Card
            key={book.id}
            avg_review={book.attributes.avg_review}
            currency={book.attributes.currency}
            price={book.attributes.price}
            img={book.attributes.book.image_url}
            title={book.attributes.book.title}
            to={book.id}
          />
        ))}
    </div>
  );
};

export default BookLis;
