"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/");
  };

  const handleManish = () => {
    // router.push("/profiles/manish");
    // router.back();
    // router.forward();
  };

  return (
    <div>
      <h1>About page</h1>
      <button onClick={handleBtn}>Home</button>
      <button onClick={handleManish}>back</button>
    </div>
  );
}

// by default all the components/pages are server sided components
// if you need client sided component -> 'use client'
