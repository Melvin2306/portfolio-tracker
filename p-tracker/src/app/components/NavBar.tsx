import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-6">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <Link href="/">Overview</Link>
      <Link href="/positions">Portfolio</Link>
      <Link href="/transactions">Transactions</Link>
    </nav>
  );
}
