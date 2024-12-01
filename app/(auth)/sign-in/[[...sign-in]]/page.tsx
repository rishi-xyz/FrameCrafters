import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#8B4513,#F5F5DC_80%)]'>
      <div className='bg-white/60 bg-opacity-50 p-4 rounded-2xl shadow-lg'>
        <SignIn />
      </div>
    </div>
  );
}