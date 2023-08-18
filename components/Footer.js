import Link from 'next/link'
import { Table } from 'semantic-ui-react'

const Footer = () => (
  <>
    <div
      class='text-black-600 body-font mt-20'
      style={{ backgroundColor: '#F6ECD1' }}
    >
      <div class='container px-5 py-24 mx-auto'>
        <div className='flex w-auto justify-center'>
          <div
            class='flex title-font font-medium items-center md:justify-start text-white-900'
            style={{ marginBottom: '46px' }}
          >
            <img
              src='/Group.png'
              width={35}
              height={38}
              style={{ marginRight: '20px' }}
            ></img>
          </div>
          <div
            class='flex title-font font-medium items-center md:justify-start justify-center text-white-900'
            style={{ marginBottom: '46px' }}
          >
            <img src='/kefi.png' width={60} height={60}></img>
          </div>
        </div>
        <div className='flex flex-col font-bold justify-center items-center title-font text-white-900 mb-16' style={{
          letterSpacing: "5px"
        }}>
          LINKS
        </div>
        <nav className='flex justify-center'>
          {/* <Table>
            <Table.Body>
              <tr>
                <td>
                  <Link href='/' className='mr-5 hover:text-black-900'>
                    <p>Home Page</p>
                  </Link>
                </td>
                <td>
                  <Link href='/' className='mr-5 hover:text-black-900'>
                    <p>Promo</p>
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ paddingRight: '109px' }}>
                  <Link href='/index_promo' className='mr-5 hover:text-black-900'>
                    <p>Our Menu</p>
                  </Link>
                </td>
                <td>
                  <Link href='/contact' className='mr-5 hover:text-black-900'>
                    <p>Location</p>
                  </Link>
                </td>
              </tr>
            </Table.Body>
          </Table> */}
          <table>
            <tbody>
              <tr>
                <td>
                  <Link href='/' className='mr-5 hover:text-black-900' style={{
                    letterSpacing: "2px",
                    textDecoration: "none",
                    color: "#000"
                  }}>
                    <p>Home Page</p>
                  </Link>
                </td>
                <td>
                  <Link href='/promo' className='mr-5 hover:text-black-900' style={{
                    letterSpacing: "2px",
                    textDecoration: "none",
                    color: "#000"
                  }}>
                    <p>Promo</p>
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ paddingRight: '109px' }}>
                  <Link href='/menu' className='mr-5 hover:text-black-900' style={{
                    letterSpacing: "2px",
                    textDecoration: "none",
                    color: "#000"
                  }}>
                    <p>Our Menu</p>
                  </Link>
                </td>
                <td>
                  <Link href='/contact' className='mr-5 hover:text-black-900' style={{
                    letterSpacing: "2px",
                    textDecoration: "none",
                    color: "#000"
                  }}>
                    <p>Location</p>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </nav>
        <div className='flex flex-col items-center justify-center'>
          <div className='title-font font-bold text-white-900 mb-3 mt-6' style={{
            letterSpacing: "5px"
          }}>
            CONTACT
          </div>
          <div className='title-font font-medium text-white-900 mb-10' style={{
            letterSpacing: "2px"
          }}>
            email@gmail.com
          </div>

          <div className='title-font font-bold text-white-900 mb-3' style={{
            letterSpacing: "5px"
          }}>
            SOCIAL
          </div>
          <div className='title-font font-medium text-white-900' style={{
            letterSpacing: "2px"
          }}>
            <Link style={{
              textDecoration: "none",
              color: "#000"
            }} href="https://www.instagram.com/kefi.cafeandspace/">
              kefi.cafeandspace
            </Link>
          </div>
        </div>

      </div>
    </div>

    <div style={{ backgroundColor: '#AA8F633' }}>
      <div class='container px-1 py-1 mx-auto flex items-center sm:flex-row flex-col'></div>
    </div>
  </>
)

export default Footer
