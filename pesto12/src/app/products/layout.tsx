export const metadata = {
  title: "products demo",
  description: "products Demo given by Vasanth",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Products header</h1>
      <hr />
      {children}
      <hr />
      <h1>Products Footer</h1>
    </div>
  );
}
