import { ReactNode } from 'react'
import { FlexBox } from '@/components/Common/StyledLayout'

const Layout = ({ children }: { children: ReactNode }) => {
  return <FlexBox>{children}</FlexBox>
}

export default Layout
