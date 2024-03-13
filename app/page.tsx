import { Htag } from "@/components";
import { Button } from "@/components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary">Button</Button>
      <Button appearance="ghost">Button</Button>
    </div>
  );
}
