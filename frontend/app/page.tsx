import Link from "next/link";

function HomePage() {
  return (
    <div>
      Welcome to the self therapy AI
      <Link href="/therapy">Start session</Link>
    </div>
  );
}

export default HomePage;