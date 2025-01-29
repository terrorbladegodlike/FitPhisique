'use client'

// Import Image & Link from Next
import Image from 'next/image'
import Link from 'next/link'

// Import Icons From React-Icons
import {
   FaMapMarkedAlt,
   FaEnvelope,
   FaPhoneAlt,
   FaFacebook,
   FaTelegram,
   FaYoutube,
} from 'react-icons/fa'

// Import Components
import CustomButton from './CustomButton'

// Import Motion
import { motion } from 'framer-motion'

// Variants
const footerContainerVariant = {
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.6,
         duration: 0.5,
         ease: 'linear',
      },
   },
}

const footerItem = {
   hidden: {
      y: 20,
      opacity: 0,
   },

   show: {
      opacity: 1,
      transition: {
         duration: 0.5,
         ease: [0.25, 0.6, 0.3, 0.8],
      },
   },
}

const Footer = () => {
   return (
      <footer className='bg-primary-300 pt-24'>
         <div className='container mx-auto pb-24'>
            <motion.div
               variants={footerContainerVariant}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.3 }}
               className='text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12'
            >
               {/* Info */}
               <div className='flex flex-col gap-4'>
                  <Link href='#'>
                     <Image
                        src={'/assets/img/logo.png'}
                        width={117}
                        height={55}
                        alt=''
                     />
                  </Link>
                  <p className='max-w-sm'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Nihil, at.
                  </p>
                  <ul className='flex flex-col gap-4'>
                     <li className='flex items-center gap-4'>
                        <FaMapMarkedAlt className='text-xl text-accent' />
                        <span>Lincoln Park Chicago, Illinois</span>
                     </li>
                     <li className='flex items-center gap-4'>
                        <FaPhoneAlt className='text-xl text-accent' />
                        <span>+37379962199</span>
                     </li>
                     <li>
                        <Link
                           className='flex items-center gap-4'
                           href='#'
                        ></Link>
                        <FaEnvelope className='text-xl text-accent' />
                        <span>ternovetchii.2002@mail.ru</span>
                     </li>
                  </ul>
               </div>
               {/* Blog */}
               <div>
                  <div>
                     <h4 className='h4 text-accent mb-4'>Recent blog posts</h4>
                     {/* Post 1 */}
                     <div className='border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4'>
                        <Link
                           className='hover:text-accent transition-all'
                           href='#'
                        >
                           <h5 className='h5 leading-snug'>
                              How to stay motivation for all exercises
                           </h5>
                           <p className='text-gray-400 text-[12px] tracking-[3px] uppercase'>
                              September 22, 2024
                           </p>
                        </Link>
                     </div>
                     {/* Post 2 */}
                     <div className='border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4'>
                        <Link
                           className='hover:text-accent transition-all'
                           href='#'
                        >
                           <h5 className='h5 leading-snug'>
                              How to stay motivation for all exercises
                           </h5>
                           <p className='text-gray-400 text-[12px] tracking-[3px] uppercase'>
                              June 22, 2024
                           </p>
                        </Link>
                     </div>
                     {/* Post 3 */}
                     <div className='flex flex-col gap-3 pb-3 mb-4'>
                        <Link
                           className='hover:text-accent transition-all'
                           href='#'
                        >
                           <h5 className='h5 leading-snug'>
                              How to stay motivation for all exercises
                           </h5>
                           <p className='text-gray-400 text-[12px] tracking-[3px] uppercase'>
                              May 22, 2024
                           </p>
                        </Link>
                     </div>
                  </div>
               </div>
               {/* Gallery */}
               <div>
                  <h4 className='h4 text-accent mb-4'>Gallery</h4>
                  {/* Gallery images */}
                  <div className='flex flex-wrap gap-2'>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/david.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/matt.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/rosy.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/sofia.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/david.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/matt.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/rosy.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/sofia.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                  </div>
               </div>
               {/* NewsLetter */}
               <div>
                  <h4 className='h4 text-accent mb-4'>Newsletter</h4>
                  <div className='flex flex-col gap-4'>
                     <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Architecto, ipsum.
                     </p>
                     <form className='flex items-center'>
                        <input
                           type='text'
                           placeholder='Tour email address'
                           className='h-[50px] outline-none px-4 text-primary-300'
                        />
                        <CustomButton
                           containerStyles='h-[52px] px-8'
                           text='Send'
                        />
                     </form>
                  </div>
               </div>
            </motion.div>
         </div>
         {/* Copyright */}
         <div className='text-white border-t border-white/20 py-12'>
            <div className='container mx-auto h-full'>
               <div className='flex items-center justify-between h-full'>
                  <span>&copy; Copyright 2024 
                     <a href="https://fivestars.agency/en/website-creation-moldova.html">Create Website Moldova</a>
                  </span>
                  <ul className='flex gap-4 text-xl'>
                     <li>
                        <Link
                           href='#'
                           className='text-white hover:text-accent transition-all'
                        >
                           <FaFacebook />
                        </Link>
                        <Link
                           href='#'
                           className='text-white hover:text-accent transition-all'
                        >
                           <FaTelegram />
                        </Link>
                        <Link
                           href='#'
                           className='text-white hover:text-accent transition-all'
                        >
                           <FaYoutube />
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
