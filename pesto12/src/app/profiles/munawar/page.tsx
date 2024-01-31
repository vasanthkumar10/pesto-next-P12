import Link from "next/link";

export default function Munawar() {
  return (
    <div>
      <h1>Munawar Profile page</h1>
      {/* <Link href={"/about"} replace>
        About page
      </Link> */}
      <Link href={"/about"}>About page</Link>
    </div>
  );
}
