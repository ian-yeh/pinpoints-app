import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image 
        src="/pinpoints-logo.png"
        width={180}
        height={50}
        alt="Pinpoint Logo"
        priority
        className="object-contain"
      />
    </div>
  )
}

export default Logo
