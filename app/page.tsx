import About from "@/components/About";
import Footer from "@/components/Footer";
import { Services } from "@/components/Services";
import Test from "@/components/Test";
import { Works } from "@/components/Works";
import { FloatingNav } from "@/components/FloatingNavbar/FloatingNavbar";
import { navItems } from "@/data";


const Home = () => {
  return (
      <main className="relative bg-[rgb(24 24 27)] flex justify-center items-center flex-col mx-auto overflow-clip">
         <div className="max-w-7xl w-full">
           <FloatingNav
              navItems={navItems}
           />
            <Test />
            <About />
            <Services />
            <Works />
            <Footer />
         </div>
      </main>
  )
}

export default Home;
