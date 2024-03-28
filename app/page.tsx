"use client";
import { Htag, Button, P, Tag, Rating } from "../components";
import getMenu from "@/api/menu";

export default async function Home() {
  const menu = await getMenu(0);
  return (
    <div>
      <div>{JSON.stringify(menu)}</div>
      <div>{menu.length}</div>
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
    </div>
  );
}
