import Header from '@/components/LandingHeader'
import UserInfoSelection from '@/components/UserInfoSelection'

export default function Home() {
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
          <div className="flex flex-col mt-24">
            <h1 className='font-bold text-[64px] tracking-tight leading-relaxed'>
              Knowing your world better <span className="bg-gradient-to-r from-foreground/100 to-foreground/40 bg-clip-text text-transparent">
                does not need to be difficult.
              </span>
            </h1>
            <h3 className='mt-8 text-2xl font-light tracking-wide'>
              We make information easy.
            </h3>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col mt-30 items-center">
            <div className='w-1/2 border-[1px] border-bg-light rounded-3xl p-6'>
              <h1 className="text-2xl font-semibold mb-2 tracking-tight">
                Tell us about yourself
              </h1>
              <div className="space-y-6">
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Let us find a personalized experience for you.
                </p>
                <UserInfoSelection />
                <button className="bg-bg text-foreground px-4 py-2 border-[0.5px] border-bg-light/40 rounded-lg font-medium hover:bg-bg-light/80 transition-colors">
                  Enter Site
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
