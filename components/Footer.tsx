import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-6xl p-4 flex flex-wrap gap-4">
        <Link href="/about">About Me</Link>
        <a href="https://github.com/youruser" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/in/youruser" target="_blank">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
