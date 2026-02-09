import Link from "next/link";

export default function Nav2() {
  return (
    <>
      <li>
        <Link href="/page-features">Features</Link>
      </li>
      <li>
        <Link href="/page-about">About</Link>
      </li>
      <li>
        <Link href="/page-contact">Contact</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </>
  );
}
