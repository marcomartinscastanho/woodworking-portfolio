import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-6xl p-4 flex justify-between">
        <div>
          <p className=" text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Marco Martins Castanho. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            All photographs and project images are copyrighted and may not be reproduced or used for AI training without
            permission.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/about">About Me</Link>
          <a href="https://github.com/marcomartinscastanho" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/marcomcastanho" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
