import { useUser } from "@/lib/hooks/useUser"

const Home = () => {
  const { userInfo } = useUser();

  return (
    <div>hello</div>
  )
}

export default Home
