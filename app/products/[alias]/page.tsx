import getMenu from "@/api/menu";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Page ",
};

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias }))
  );
}

export default function ProductsPage({
  params,
}: {
  params: { alias: string };
}) {
  return (
    <div>
      <h1>Products Page</h1>
      {params.alias}
    </div>
  );
}
