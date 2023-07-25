import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-right justify-between bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-6">
      <div></div>
      <div></div>
      <div></div>
      <Link href="/" className="ml-auto mr-5">
        Overview
      </Link>
      <Link href="/positions" className="mr-5">
        Portfolio
      </Link>
      <Link href="/transactions" className="mr-5">
        Transactions
      </Link>
    </nav>
  );
}
