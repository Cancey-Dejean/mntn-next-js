import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Logo from "@/components/Logo"
import NavMenu from "@/components/NavMenu"
import NavSettings from "@/components/NavSettings"
import TextImage from "@/components/TextImage"

export default function Home() {
  return (
    <main>
      <Hero />

      <TextImage
        number="01"
        topText="Get Started"
        heading="What Type of Hiker Are You?"
        desc="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
        link="/"
        imgUrl="/img/image@2x.png"
        imgAlt="Hiker"
      />

      <TextImage
        reverse
        number="02"
        topText="Hiking Essentials"
        heading="Picking the right Hiking Gear!"
        desc="The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
        link="/"
        imgUrl="/img/image2.jpg"
        imgAlt="Hiker"
      />

      <TextImage
        number="03"
        topText="Get Started"
        heading="What Type of Hiker Are You?"
        desc="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
        link="/"
        imgUrl="/img/image@2x.png"
        imgAlt="Hiker"
      />

      <Footer />
    </main>
  )
}
