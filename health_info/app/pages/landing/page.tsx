import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import HeaderImage from '@/assets/header.png'

export default function page() {
  return (
    <>
      <section className="w-[90%] xl:w-[70%] flex flex-col justify-center items-center h-screen mx-auto">
        {/* Navbar */}
        <Navbar />

        {/* Header */}
        <div className="flex justify-between p-2 gap-4 w-full" id='/'>
          <div className="flex justify-center items-center w-1/2 h-full">
            <Image src={HeaderImage} alt="Logo" width={800} height={800} className="w-full h-full" />
          </div>
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex justify-center items-center">
              <h3>Welcome to H.I.E</h3>
            </div>
          </div>
        </div>

        {/* About us */}
        <div className="" id='about'>

        </div>

        {/* Services */}
        <div className="" id='services'>

        </div>

        {/*  */}
        <div className="" id='contact'>

        </div>

      </section>
    </>
  )
}
