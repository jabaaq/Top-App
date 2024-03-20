"use client";
import { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";

export default function Home() {
  const [rating, setRating] = useState<number>(4);
  return (
    <div>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary" arrow="right" className="testClassname">
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <P size="s">Small</P>
      <P>Large</P>
      <Tag color="red">Red</Tag>
      <Tag color="green">Green</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </div>
  );
}
