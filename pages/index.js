import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import nookies from "nookies";


export default function Home({ token }) {


  return (
    <div className="">
      <Head>
        <title>Farhad Hossain</title>
        <meta name="description" content="landing page && portffolio" />
        <link rel="icon" href="images/2.jpg" />
      </Head>
      <main className="bodyCss overflow-x-hidden">
        <Nav />
        <Header />
        <About />
        <Experiences />
        <Services />
        <Projects token={token} />
        <Testimonials />
        <Contact />
        <Footer />
     
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  //Parse cookies from request header
  const cookies = nookies.get(ctx) ? nookies.get(ctx) : null;

  const token = cookies;
  return {
    props: {
      token,
    },
  };
}
