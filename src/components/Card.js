import { Link } from "react-router-dom";

const Card = ({ img, title, currency, price, avg_review, to }) => {
  return (
    <div className="card">
      <img src={img} alt="book" width={250} />
      <h3>{title}</h3>
      <p className="review">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADk0lEQVR4nNWXW2yMQRTHl4gXl0SIxIuHdmb3nKHfzLbqTlFBIkIlItT1xYPri2td0vZJJRJC0lDaalWphAieXBI0NEUiErciWreloVmXVIvmyPm+3e1uFd3dLnGSk53MN+f8/vvNzJn5XK44LCMjoxe761+ZlpivJeb9E7hX4kQt8buR2Ga51ZS/Ck8ZmjJAS2gwEsl2gS/T3O5Bf4vfQ0s4w+DsTLCd29zHzxJO90q1hoHjUoDuFALdPQA0wXLehJawOqFwKwmGa4nNDDu+Feh1peMntztvwUhs0VKZxMAtq48WcJ9BW7Pb4UHPWRiaijqPx9Ov2wUYCYcZkDUOqb7MgX5+WEKNZ6fZbe6bMz6wKCUc7haoTsZhWmKuEfiQE6cj0vU9Dtxfu42++evIV2VCb6FmL9AoFZgOgc+0gL2WW42PZnH2NMmesUbgbi2gPrTNJNLkVKSKzWiDGs/PpLaW9/Zvx6k4utkZGx7LYjinNxnGdCamJ6tktbyfwwOnpgFtWYB0OhfoRYUD8J2w6GvTA/LX5PwED/rLY0AXCpB2LAbKTIsUoyU2aglllvDMssu4EZDB1Sw4YHo6Uv5SpMu7gF4da0/qq9LUdHUltby+Rs31534J70zMpQKwc04bESGmjdmBBYY7uXOSAXpcEg411FS9lpobzlNb60dqfVtD/lt55DuZ2mUB4c65mREQsDM0B/wqtMQb/GDVbGee2d9dXkYtvmry1+6gN6fGxgQN93VzA9Mg8KZSqnfEQkiRMklL/MADSje0i+guL10f3B3wyQJwd7oFvMm4mAeNVki1+7oPfns/0JhhoX+/6Lf70EgoDxachvL44c8rgOZPCs47nPhjIVBK9TUCH3EAr9x4BeQtDdWCpyOF6O/qimmpRmoBX71upIsFscM5lnNwLs7ZJXjQtMBKVl62KXYBHBuY90pXtKYFlsYr4MjG0LlQErUAI7CEgzlJzAI2hE7H4v9QgIRiW0AcRYkLWsz3AxO4gHRWFZ+UAh3PAVqT5Ti3uS+hAuqKgco3OUCulBHnPV9WAGnZDKTCtUj3iiLLr5ZwKGoBWsKh4OG0fAZSqifiTP+uBVwxAtexczvwkWI/T3U7MRwbtwATBjUCqxmYBjCk4/h0gIFGwhIj8awR0BoRK7AoegECi7TEL5xQS1hhJVmDo/lyMkLN45sPn35G4MGoBRih2PpGHdjBnLNFqXjzJMx+AAPkb/sezcggAAAAAElFTkSuQmCC"
          alt="star"
        />
        acarge reviews: {avg_review}
      </p>

      <p>
        {currency} <b>{price}</b>
      </p>
      <Link to={to}>Show Details</Link>
    </div>
  );
};

export default Card;
