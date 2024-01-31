export const metadata = {
  title: "Nextjs demo",
  description: "Demo given by Vasanth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Header</h1>
        <hr />
        {children}
        <hr />
        <h1>Footer</h1>
      </body>
    </html>
  );
}
