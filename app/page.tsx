"use client";
import { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        className="testClassname"
        onClick={() => setCounter(counter + 1)}
      >
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <P size="s">Small</P>
      <P size="m">Medium</P>
      <P size="l">Large</P>
      <P>Large</P>
      <Tag color="red">Red</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="ghost">Ghost</Tag>
      <Tag color="grey">Grey</Tag>
      <Rating rating={4} />
    </div>
  );
}
