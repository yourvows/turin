import Nav from '../Nav.jsx'
export default function  Default({children}) {
  return (
      <>
        <Nav/>
        <main>
          {children}
        </main>
      </>
  )
}