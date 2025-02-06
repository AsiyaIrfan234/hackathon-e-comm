import React from 'react'
import WebsiteBanner from '../components/WebsiteBanner'
import { FaSearch, FaTag, FaUser } from 'react-icons/fa'
import { SlCalender } from "react-icons/sl";
import { CiSearch } from 'react-icons/ci'
import Underline from '../components/Underline';
import Input from '../components/Input';
import Pagination from '../components/Pagination';
import Gurantees from '../components/Gurantees';

const BlogCard = ({ src, type = "Wood", title, desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.' }) => {
    return <article className='flex flex-col gap-4 md:gap-6'>
        <div>
            <img src={src} className='object-cover size-full' alt="" />
        </div>
        <div className='flex flex-wrap gap-4 md:gap-6 items-center '>
            <div className='flex text-[#9F9F9F] tracking-wide text-[.8em] font-medium md:text-xl  items-center gap-2 md:gap-4'>
                <FaUser className='size-5 md:size-6' />
                <span >Admin</span>
            </div>
            <div className='flex text-[#9F9F9F] tracking-wide text-[.8em] font-medium md:text-xl  items-center gap-2 md:gap-4'>
                <SlCalender className='size-5 md:size-6' />
                <span >14 Oct 2022</span>
            </div>
            <div className='flex text-[#9F9F9F] tracking-wide text-[.8em] font-medium md:text-xl  items-center gap-2 md:gap-4'>
                <FaTag className='size-5 md:size-6' />
                <span >{type}</span>
            </div>
        </div>
        <h1 className='md:text-[2.2em] sm:text-[1.8em] text-[1.6em] font-medium md:tracking-wide lg:tracking-wider'>{title}</h1>
        <p className='text-[.9em] text-[#9F9F9F] font-medium tracking-wide  md:text-[1.2em]'>{desc}</p>
        <Underline title={'Read More'} />
    </article>

}

const CategoriesItem = ({ word, count }) => {
    return <div className='flex-between w-full text-[.9em] text-[#9F9F9F] md:text-[1.2em]'>
        <span>{word}</span>
        <span>{count}</span>
    </div>
}

const PostCard = ({ src, date = '13 Oct 2022', title }) => (
    <div className='flex gap-4 items-center'>
        <div>
            <img src={src} className='md:size-full object-cover overflow-hidden rounded-lg' alt="" />
        </div>
        <div>
            <h1 className='text-[.9em] md:text-[1.1em] tracking-wide font-medium'>{title}</h1>
            <span className='text-[.9em] text-[#9F9F9F]'>{date}</span>
        </div>
    </div>
)

const Page = () => {
    return (
        <div className='py-[3em] md:py-0'>
            <WebsiteBanner title={'Blog'} />
            <main className='md:flex  cp py-[2rem] md:py-[4rem] justify-between gap-4 md:gap-8'>
                <section className='md:w-[70%] flex  flex-col gap-[2rem] md:gap-[3rem] '>
                    <BlogCard src={'/images/Article1.png'} title={'Going All in one with Millenial Design.'} />
                    <BlogCard src={'/images/Article2.png'} title={'Exploring New ways of Decorating.'} type='HandMade' />
                    <BlogCard src={'/images/Article2.png'} title={'Hand Made pieces that took to made.'} />
                </section>
                <br className='block md:hidden' />
                <br className='block md:hidden' />
                
                <section className='md:w-[33%] flex-col flex gap-[1.8em] md:gap-[2.3rem]'>
                    <div className='px-4 py-2 md:py-3 border-[#9F9F9F] rounded-[1em] border flex-between w-full'>
                        <Input inputClass='!border-none' />
                        <CiSearch className='size-6 md:size-8' />
                    </div>

                    <div className='px-2 py-2 md:py-4 md:px-4 lg:px-8'>
                        {/* Categories */}
                        <div className='flex flex-col gap-[1rem] md:gap-y-[2rem]'>
                            <h1 className='md:text-[2.2em] text-[1.5em] tracking-wide font-medium'> Categories</h1>
                            <CategoriesItem word={'Crafts'} count={'2'} />
                            <CategoriesItem word={'Design'} count={'8'} />
                            <CategoriesItem word={'Handmade'} count={'7'} />
                            <CategoriesItem word={'Interior'} count={'1'} />
                            <CategoriesItem word={'Wood'} count={'6'} />

                        </div>
                        <br />
                        <br />
                        {/* Recents Post */}
                        <div className='flex flex-col gap-[1rem] md:gap-y-[2rem]'>
                            <h1 className='md:text-[2.2em] text-[1.5em] tracking-wide font-medium'> Recent Posts</h1>
                              <PostCard  title={'Going all-in with millenial design.'} src={'/images/Post1.png'}  />
                              <PostCard  title={'Exploring New ways of decorating.'} src={'/images/Post2.png'}  />
                              <PostCard  title={'Handmade pieces that took time to made.'} src={'/images/Post3.png'}  />
                              <PostCard  title={'Modern Home in Milan.'} src={'/images/Post4.png'}  />
                              <PostCard  title={'Colourful Office Redesign.'} src={'/images/Post1.png'}  />
                        </div>
                    </div>

                </section>
            </main>
            <Pagination />
            <Gurantees />
        </div>
    )
}

export default Page