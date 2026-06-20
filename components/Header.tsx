import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl p-4">
        <Link href="/" className="text-2xl font-bold">
          My Woodworking Projects
        </Link>
      </div>
    </header>
  );
}
