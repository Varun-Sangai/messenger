import SignIn from '@/components/Forms/Signin'
import Image from 'next/image'
export default function Home() {
  return (
    <main className='min-h-[100vh] p-[20px] bg-gray-100 w-screen flex justify-center items-center'>
      <SignIn></SignIn>
    </main>
  )
}
