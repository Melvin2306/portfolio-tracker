import Image from "next/image";
import GraphPerformance from "./components/GraphPerformance";
import PositionsTable from "./components/PositionsTable";
import TransactionsTable from "./components/TransactionsTable";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <GraphPerformance />
      <PositionsTable />
      <TransactionsTable />
    </main>
  );
}
