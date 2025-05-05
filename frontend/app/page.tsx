import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      Welcome to the self therapy AI. Talk to yourself to cure your depression. If it doesn't work it's your fault
      <Link href="/therapy" className={buttonVariants({ variant: "default" })}>Start session</Link>
    </div>
  );
}

export default HomePage;