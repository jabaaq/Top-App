import { Htag, Button, P, Tag } from "../components";

export default function Home() {
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
      <P size="m">Medium</P>
      <P size="l">Large</P>
      <P>Large</P>
      <Tag color="red">Red</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="ghost">Ghost</Tag>
      <Tag color="grey">Grey</Tag>
    </div>
  );
}
