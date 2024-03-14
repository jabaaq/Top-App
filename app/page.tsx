import { Htag } from "@/components";
import { Button } from "@/components";
import { P } from "@/components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary" className="testClassname">
        Button
      </Button>
      <Button appearance="ghost">Button</Button>
      <P size="s">Small</P>
      <P size="m">Medium</P>
      <P size="l">Large</P>
      <P>Large</P>
    </div>
  );
}
