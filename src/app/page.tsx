import App from "@/components/Main";
import { Title } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-50  w-full">
      <nav className="m-4">
        <Link href={"/"}>
          <Title style={{ color: 'teal' }} order={3} size="h1">
            Katex ⚡ Decoder
          </Title>
        </Link>
      </nav>
      <App />
    </main>
  );
}
