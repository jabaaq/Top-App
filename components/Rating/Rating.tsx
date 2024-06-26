import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classNames";
import { useEffect, useState, KeyboardEvent } from "react";
import { TiStarFullOutline } from "react-icons/ti";

export const Rating = ({
  rating,
  isEditable = false,
  setRating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>) //creating a new array of 5 elements filled with empty JSX <div> </> elements.
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <TiStarFullOutline
          key={i}
          size={25}
          className={cn(styles.star, {
            [styles.filled]: i < currRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRating(i + 1)}
          tabIndex={isEditable ? 0 : -1} //if isEditable it lines up one after another, if not, then Minus one means it will be outside the Tab
          onKeyDown={(e: KeyboardEvent<SVGElement>) =>
            isEditable && handleSpace(e, i + 1)
          }
        />
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      //if the component is't editable, it shouldn’t change during the onMouseEnter
      return;
    }
    constructRating(i);
  };

  const changeRating = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (e: KeyboardEvent<SVGElement>, i: number) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
