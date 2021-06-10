import Footer from "./footer/Footer"
import Header from "./header/Header"

const HeaderFooter = ({ children }) => {
    return (
        <>
     <Header />
     { children }
     <Footer />

</>
    )
}

export default HeaderFooter;