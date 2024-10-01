"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState(""); 

  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch("/api/hello");
      const text = await response.text(); 
      setName(text); 
    };

    fetchName();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-3xl font-bold">
          Hi from<span className="text-red-300 pl-2">{name} 🔥</span>
        </h1>
      </div>
    </>
  );
}
