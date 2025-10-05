"use client";
import { useUser } from "@/lib/hooks/useUser"
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";
import { RevealAnimation } from "@/components/RevealAnimation";

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const Home = () => {
  const { userInfo } = useUser();

  return (
    <div className="h-[100vh] w-[100vw]">
      <Map />
      <Sidebar />
    </div>
  )
}

export default Home
