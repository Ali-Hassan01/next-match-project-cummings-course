import { Button } from "@heroui/react";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-red-500">Hello world</h1>
      <Button className="bg-red-200">
        {" "}
        <Link href="/members">Go to members page</Link>
      </Button>
    </>
  );
}
