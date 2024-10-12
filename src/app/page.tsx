import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import Link from next/link

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link href="/editor">
        <Button>Text Editor</Button>
      </Link>
    </div>
  );
}
