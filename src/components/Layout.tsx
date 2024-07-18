import Footer from './Footer/index'
import Header from './Header/index'

export default function Layout({ children }: any) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}