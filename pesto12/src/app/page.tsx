// page.tsx -> defines the page

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={"/about"}>About page</Link>
      <br />
      <Link href={"/profiles/munawar"}>Munawar page</Link>
    </div>
  );
}
