"use client"
import Header from '@/components/LandingHeader'
import { RevealAnimation } from '@/components/RevealAnimation'
import Spectrum from '@/components/Spectrum'
import UserInfoSelection from '@/components/UserInfoSelection'
import { useUser } from '@/lib/hooks/useUser'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const { userInfo } = useUser()

  const handleEnter = () => {
    console.log(userInfo)
    router.push("/home")
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER - Fixed height */}
      <div className='h-[20vh] flex flex-col items-center justify-center'>
        <Header />
      </div>
      
      {/* MAIN LANDING CONTENT - Takes remaining space and centers */}
      <div className="flex-1 flex">
          <div className="grid grid-cols-2 w-full px-30 gap-16">
            {/* LEFT COLUMN */}
            <div className="flex flex-col mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 100, y: 0}}
                transition={{ duration: 0.5 }}
              >
                <h1 className='font-extrabold text-[64px] tracking-tight leading-relaxed'>
                  Knowing your world better <span className="bg-gradient-to-r from-foreground/100 to-foreground/40 bg-clip-text text-transparent">
                    does not need to be difficult.
                  </span>
                </h1>
                <h3 className='mt-8 text-2xl font-light tracking-wide'>
                  We make information easy, across the <span className='font-extrabold'>whole</span> spectrum.
                </h3>
              </motion.div>
              <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              >
                <Spectrum />
              </motion.div>
            </div>

          {/* RIGHT COLUMN */}
          <RevealAnimation>
            <div className="flex flex-col mt-12 items-center">
                <div className='w-1/2 border-[1px] border-bg-light rounded-3xl p-6'>
                  <h1 className="text-2xl font-semibold mb-2 tracking-tight">
                    Tell us about yourself
                  </h1>
                  <div className="space-y-6">
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      Let us find a personalized experience for you.
                    </p>
                    <UserInfoSelection />
                    <div className='text-left block mx-auto'>
                      <button 
                        className="bg-bg text-foreground px-4 py-2 border-[0.5px] border-bg-light/40 rounded-lg font-medium hover:bg-bg-light/80 transition-colors"
                        onClick={handleEnter}
                      >
                        Enter Site
                      </button>
                    </div>
                  </div>
                </div>
            </div>
          </RevealAnimation>

        </div>

      </div>
    </div>
  )
}
