import Header from '@/components/Header'
import { ClerkLoaded } from '@clerk/nextjs'

const layout = ({children} : {children:React.ReactNode}) => {
  return (
    <ClerkLoaded>
      <div>
        <Header/>
        {children}
      </div>
    </ClerkLoaded>
  )
}

export default layout
