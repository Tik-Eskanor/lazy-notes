import { Navigation } from "@/components/Navigation"
import { Bookmark, BookmarkCheck, BotIcon, Calendar, Camera, Edit, SendIcon, Users } from "lucide-react"
import Image from "next/image"
import React from "react"
export default async function page() {
  return (
    <div className="bg-[#01051e]">
      <header>
        <Navigation />
      </header>

      <main>
        <section id="home" className="relative">
          <div className="blob-top"></div>
          <div className="container mx-auto px-7 md:px-10 mt-5">
            <div className="flex flex-col items-center md:flex-row mt-5 relative z-10">
              <div className="text-center md:text-left mb-3 md:w-1/2 md:pr-10 ">
                <h1 className="title text-4xl md:text-7xl text-white">Lazy Note Taker</h1>
                <p className="leading-relaxed mb-10 text-white/60 max-w-[400px] mx-auto md:mx-0">It's more than just a digital notepad it's your personal AI thought partner designed to make every single note more valuable.</p>
                <a href="/dashboard" className="btn text-white">Get stared</a>
              </div>
              <div className="md:w-1/2 pb-10" data-aos="fade-up">
                <Image src="/img3.png" alt="" width={1000} height={1000} className="m-auto w-[95%]" />
              </div>
            </div>
          </div>
          <div className="blob-bottom"></div>
        </section>

        <section id="features" className="bg-color-primary-light">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-20 m-auto md:w-1/2">
              <h4 className="text-color-secondary mb-4 font-bold">Our Features</h4>
              <h1 className="capitalize title text-white">Easy to manage all your notes using our app</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between flex-wrap">

              {/* <!--card no 1 --> */}
              <div data-aos="fade-up" className="border-2 border-solid border-color-gray my-4 w-1/1 md:w-[30%] min-w-[300px] py-20 px-5 cursor-pointer rounded-2xl text-center hover:bg-color-primary-dark ease-in 200">
                <div className="bg-color-secondary rounded-2xl py-5 px-6 inline-block">
                  <Edit className="text-4xl text-white" />
                </div>
                <h3 className="text-xl py-4 font-bold text-white">Effortless Editing</h3>
                <p className="leading-relaxed text-white/80">Our intuitive editor allows you to easily refine, format, and structure your notes at any time.</p>
              </div>

              {/* <!--card no 2 --> */}
              <div data-aos="fade-up" className="border-2 border-solid border-color-gray my-4 w-1/1 md:w-[30%] min-w-[300px] py-20 px-5 cursor-pointer rounded-2xl text-center bg-color-primary-dark">
                <div className="bg-color-secondary rounded-2xl py-5 px-6 inline-block">
                  <Camera className="text-4xl text-white" />
                </div>
                <h3 className="text-xl py-4 font-bold text-white">Quick Capture & Saving</h3>
                <p className="leading-relaxed text-white/80">Instantly jot down ideas, meeting notes, to-dos, or any thought as soon as it strikes.</p>
              </div>

              {/* <!--card no 3 --> */}
              <div data-aos="fade-up" className="border-2 border-solid border-color-gray my-4 w-1/1 md:w-[30%] min-w-[300px] py-20 px-5 cursor-pointer rounded-2xl text-center hover:bg-color-primary-dark ease-in 200">
                <div className="bg-color-secondary rounded-2xl py-5 px-6 inline-block">
                  <BotIcon className="text-4xl text-white" />
                </div>
                <h3 className="text-xl py-4 font-bold text-white">AI Assist</h3>
                <p className="leading-relaxed text-white/80">All your notes are safely stored and instantly synced across all your devices.</p>
              </div>
            </div>
          </div>
        </section>


        <section id="saving-money" className="relative py-10">
          <div className="blob-top"></div>
          <div className="blob-bottom"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div data-aos="fade-up" className="md:w-1/2">
                <Image src="/img4.png" alt="" width={1000} height={1000} className="w-[90%] mx-auto relative z-10" />
              </div>
              <div data-aos="fade-down" className="text-center md:text-left md:w-1/2 md:ml-20 relative z-10">
                <h4 className="text-color-secondary mb-4 font-bold">Saving Time</h4>
                <h1 className="capitalize title mb-4 text-white">Best editing app to save your notes</h1>
                <p className="leading-relaxed mb-10 text-white/80">
                  Say goodbye to scattered thoughts and wasted time! Lazy notes is a next generation note
                  taking application that combines the simplicity of quick, reliable note capture with the power of artificial intelligence.
                </p>
                <button className="btn text-white">Read More</button>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works bg-color-primary-light">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-20 m-auto md:w-1/2">
              <h4 className="text-color-secondary mb-3 font-bold">Hot it works</h4>
              <h1 className="capitalize title text-white">Get started with these easy steps</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between flex-wrap">
              {/* <!--card 1 --> */}
              <div className="text-center cursor-pointer my-6 w-1/1 md:w-[30%] min-w-[300px] px-4">
                <div data-aos="fade-up" className="bg-color-primary-dark px-6 py-3 inline-block rounded-lg hover:bg-color-secondary ease-in duration-200">
                  <p className="text-6xl text-white">1</p>
                </div>
                <h3 className="text-xl py-4 font-bold text-white">Sign Up</h3>
                <p className="leading-relaxed text-white/80">Quickly sign up using your email address and create you personal account to get started</p>
              </div>
              {/* <!--card 2 --> */}
              <div className="text-center cursor-pointer my-6 w-1/1 md:w-[30%] min-w-[300px] px-4">
                <div data-aos="fade-up" className="px-6 py-3 inline-block rounded-lg bg-color-secondary">
                  <p className="text-6xl text-white">2</p>
                </div>
                <h3 className="text-xl py-4 font-bold text-white">Verify Email </h3>
                <p className="leading-relaxed text-white/80">A verification link or code will be sent to the email address you provided. Click the link to proceed.</p>
              </div>
              {/* <!--card 3 --> */}
              <div className="text-center cursor-pointer my-6 w-1/1 md:w-[30%] min-w-[300px]  px-4">
                <div data-aos="fade-up" className="bg-color-primary-dark px-6 py-3 inline-block rounded-lg hover:bg-color-secondary ease-in duration-200">
                  <p className="text-6xl text-white">3</p>
                </div>
                <h3 className="text-xl py-4 font-bold text-white">Login</h3>
                <p className="leading-relaxed text-white/80">Once verified, log in with your credentials. You can now take notes and immediately engage with your AI assistant!</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-color-primary-light">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-20 m-auto md:w-1/2">
              <h4 className="text-color-secondary mb-3 font-bold">User Review</h4>
              <h1 className="capitalize title text-white">What clients say about our app after using it</h1>
            </div>
            {/* <!--review container --> */}
            <div className="mt-6">
              <div className="flex items-center justify-center flex-wrap">
                <Image src="/user1.jpeg" alt="" width={500} height={500} className="w-20 h-20 rounded-full m-5 object-cover cursor-pointer user-pic" />
                <Image src="/user2.jpeg" alt="" width={500} height={500} className="w-20 h-20 rounded-full m-5 object-cover cursor-pointer user-pic" />
                <Image src="/user3.jpeg" alt="" width={500} height={500} className="w-20 h-20 rounded-full m-5 object-cover cursor-pointer user-pic" />
                <Image src="/user4.jpeg" alt="" width={500} height={500} className="w-20 h-20 rounded-full m-5 object-cover cursor-pointer user-pic" />
                <Image src="/user5.jpeg" alt="" width={500} height={500} className="w-20 h-20 rounded-full m-5 object-cover cursor-pointer user-pic" />
              </div>
            </div>
            <div>
              <div className="w-full md:w-3/5 m-auto text-center">
                <p className="text-xl text-white">"We've had positive feedback from all our users so far. We take our user feedbacks seriously and use he to add new features to the app. Do share your feedback if you have any"</p>
                <h4 className="text-color-secondary mt-6">Makin Nesus</h4>
                <p className="text-white">ISO developer</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing bg-color-primary-light ">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-10 m-auto md:w-1/2">
              <h4 className="text-color-secondary mb-4 font-bold">Pricing</h4>
              <h1 className="capitalize title text-white">Check out our Packages</h1>
            </div>
            {/* <!--Rounded switch --> */}
            {/* <div className="flex items-center justify-center mt-4 gap-4">
              <p>Bill monthly</p>
              <label className="cursor-pointer inline-block w-20 h-8 relative rounded-full">
                <input type="checkbox" id="toggleBtn" className="peer opacity-0 w-0 h-0" />
                <span className="absolute left-0 right-0 bottom-0 top-0 bg-color-primary-light border border-solid border-color-gray rounded-full duration-300
                      before:content-[''] before:absolute before:w-6 before:h-6 before:left-1 before:bottom-1 before:rounded-full
                      before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary"></span>
              </label>
              <p>Bill Anually</p>
            </div> */}
            <div className="flex flex-col md:flex-row items-center justify-between flex-wrap">
              {/* <!--card 1 --> */}
              <div className="card relative my-6  md:w-[30%] min-w-[300px]  h-auto ">
                {/* <!--front side --> */}
                <div data-aos="fade-up" className="text-white px-7 py-11 rounded-2xl border-2 border-solid border-color-gray w-full h-full">
                  <div className="relative">
                    <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                      20 <span className="font-normal tracking-widest text-sm">/per month</span>
                    </p>
                  </div>
                  <div className="py-10">
                    <h3 className="text-xl font-bold pb-3">Basic</h3>
                    <p className="leading-relaxed capitalize">for beginner who want to scale their business globally</p>
                  </div>
                  <ul className="space-y-4 pb-10">
                    <li className="flex gap">
                      <BookmarkCheck className="text-color-secondary" />
                      <span className="pl-4">Expense Management</span>
                    </li>
                    <li className="flex gap">
                      <BookmarkCheck className="text-color-secondary" />
                      <span className="pl-4">Card Management</span>
                    </li>
                    <li className="flex gap">
                      <Bookmark className="text-color-gray" />
                      <span className="pl-4">Instant Statistics</span>
                    </li>
                    <li className="flex gap">
                      <Bookmark className="text-color-gray" />
                      <span className="pl-4">Bookmark Function</span>
                    </li>
                    <li className="flex gap">
                      <Bookmark className="text-color-gray" />
                      <span className="pl-4">Accounting Services</span>
                    </li>
                  </ul>
                  <button className="card-btn">get started</button>
                </div>
              </div>

              {/* <!--card 2 --> */}
              <div className="card relative my-6 md:w-[30%] min-w-[300px]  h-auto w-auto">
                {/* <!--front side --> */}
                <div data-aos="fade-up" className="text-white px-7 py-11 rounded-2xl border-2 border-solid border-color-gray w-full h-full">
                  <div className="relative">
                    <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                      50 <span className="font-normal tracking-widest text-sm">/per month</span>
                    </p>
                  </div>
                  <div className="py-10">
                    <h3 className="text-xl font-bold pb-3">Standard</h3>
                    <p className="leading-relaxed capitalize">for beginner who want to scale their business globally</p>
                  </div>
                  <ul className="space-y-4 pb-10">
                    <li className="flex gap">
                      <BookmarkCheck className="text-color-secondary" />
                      <span className="pl-4">Expense Management</span>
                    </li>
                    <li className="flex gap">
                      <BookmarkCheck className="text-color-secondary" />
                      <span className="pl-4">Card Management</span>
                    </li>
                    <li className="flex gap">
                      <BookmarkCheck className="text-color-secondary" />
                      <span className="pl-4">Instant Statistics</span>
                    </li>
                    <li className="flex gap">
                      <BookmarkCheck className="text-color-secondary" />
                      <span className="pl-4">Bookmark Function</span>
                    </li>
                    <li className="flex gap">
                      <Bookmark className="text-color-gray" />
                      <span className="pl-4">Accounting Services</span>
                    </li>
                  </ul>
                  <button className="card-btn">get started</button>
                </div>
              </div>

              {/* <!--card 3 --> */}
              <div className="card relative my-6 md:w-[30%] min-w-[300px]  h-auto w-auto">
                {/* <!--front side --> */}
                <div data-aos="fade-up" className="text-white px-7 py-11 rounded-2xl border-2 border-solid border-color-gray w-full h-full">
                  <div className="relative">
                    <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                      100 <span className="font-normal tracking-widest text-sm">/per month</span>
                    </p>
                  </div>
                  <div className="py-10">
                    <h3 className="text-xl font-bold pb-3">Premium</h3>
                    <p className="leading-relaxed capitalize">for beginner who want to scale their business globally</p>
                  </div>
                  <ul className="space-y-4 pb-10">
                    <li className="flex gap">
                      <BookmarkCheck className="text-color-secondary" />
                      <span className="pl-4">Expense Management</span>
                    </li>
                    <li className="flex gap">
                      <BookmarkCheck className="text-color-secondary" />
                      <span className="pl-4">Card Management</span>
                    </li>
                    <li className="flex gap">
                      <BookmarkCheck className="text-color-secondary" />
                      <span className="pl-4">Instant Statistics</span>
                    </li>
                    <li className="flex gap">
                      <BookmarkCheck className="text-color-secondary" />
                      <span className="pl-4">Bookmark Function</span>
                    </li>
                    <li className="flex gap">
                      <BookmarkCheck className="text-color-secondary" />
                      <span className="pl-4">Accounting Services</span>
                    </li>
                  </ul>
                  <button className="card-btn">get started</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-20 m-auto md:w-1/2">
              <h4 className="text-color-secondary mb-4 font-bold">Inovations and quality impovements</h4>
              <h1 className="capitalize title text-white">Latest update, solutions and company news</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between flex-wrap">
              {/* <!--card 1 --> */}
              <div data-aos="fade-up" className="text-white cursor-pointer my-6 w-1/1 md:w-[30%] min-w-[300px] px-4">
                <div className="rounded-xl scale-100 overflow-hidden">
                  <Image src="/card1.jpg" alt="" width={1000} height={1000} className=" w-full  hover:scale-125 transition-all ease-in-out duration-200" />
                </div>
                <div className="flex items-center gap-5 py-5">
                  <p>20 Agust 20222</p>
                  <p>1 min read</p>
                </div>
                <a href="https://www.technewsworld.com/section/tech-blog" className="text-2xl font-bold underline hover:text-color-secondary hover:no-underline">
                  Four ways to cheer yourself up on blue monday
                </a>
                <p className="my-5 leading-relaxes">
                  On the second edition of serious Business, inc. editor Jim  ledbetter and fusion senior editor salmon debate...
                </p>
                <a href="https://www.technewsworld.com/section/tech-blog" className="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out">
                  <span className="tracking-wider underline hover:no-underline">Read More</span>
                </a>

              </div>
              {/* <!--card 2 --> */}
              <div data-aos="fade-up" className="text-white cursor-pointer my-6 w-1/1 md:w-[30%] min-w-[300px] px-4">
                <div className="rounded-xl scale-100 overflow-hidden">
                  <Image src="/card2.jpeg" alt="" width={1000} height={1000} className=" w-full  hover:scale-125 transition-all ease-in-out duration-200" />
                </div>
                <div className="flex items-center gap-5 py-5">
                  <p>20 Agust 20222</p>
                  <p>1 min read</p>
                </div>
                <a href="https://www.technewsworld.com/section/tech-blog" className="text-2xl font-bold underline hover:text-color-secondary hover:no-underline">
                  How to organise your budget for maximum productivity
                </a>
                <p className="my-5 leading-relaxes">
                  Prioritizing open-source tools and serverless architecture can significantly reduce initial infrastructure costs without sacrificing future growth...
                </p>
                <a href="https://www.technewsworld.com/section/tech-blog" className="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out">
                  <span className="tracking-wider underline hover:no-underline">Read More</span>
                </a>
              </div>
              {/* <!--card 3 --> */}
              <div data-aos="fade-up" className="text-white cursor-pointer my-6 w-1/1 md:w-[30%] min-w-[300px] px-4">
                <div className="rounded-xl scale-100 overflow-hidden">
                  <Image src="/card3.jpg" alt="" width={1000} height={1000} className=" w-full  hover:scale-125 transition-all ease-in-out duration-200" />
                </div>
                <div className="flex items-center gap-5 py-5">
                  <p>20 Agust 20222</p>
                  <p>1 min read</p>
                </div>
                <a href="https://www.technewsworld.com/section/tech-blog" className="text-2xl font-bold underline hover:text-color-secondary hover:no-underline">
                  Should small business be enlisted in systems?
                </a>
                <p className="my-5 leading-relaxes">
                  Effective business scaling often depends on choosing a lean tech stack that minimizes overhead while maintaining high performance
                </p>
                <a href="https://www.technewsworld.com/section/tech-blog" className="inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out">
                  <span className="tracking-wider underline hover:no-underline">Read More</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-20 m-auto md:w-1/2">
              <h4 className="text-color-secondary mb-4 font-bold">Have A Question</h4>
              <h1 className="capitalize title text-white">get in touch</h1>
            </div>
            <form action="">
              <div className="w-full m-auto text-center md:w-2/3">
                <div className="text-color-primary-dark flex flex-wrap justify-center md:justify-between gap-4 mb-6">
                  <input type="text" className="bg-gray-50 border border-gray-300 text text-sm rounder-lg block w-full md:w-[47%] rounded-lg p-3 focus:outline-none focus:border-color-secondary" placeholder="Name" />
                  <input type="email" className="bg-gray-50 border border-gray-300 text text-sm rounder-lg block w-full md:w-[47%] rounded-lg p-3 focus:outline-none focus:border-color-secondary" placeholder="Email" />
                  <input type="tel" className="bg-gray-50 border border-gray-300 text text-sm rounder-lg block w-full md:w-[47%] rounded-lg p-3 focus:outline-none focus:border-color-secondary" placeholder="Phone" />
                  <input type="text" className="bg-gray-50 border border-gray-300 text text-sm rounder-lg block w-full md:w-[47%] rounded-lg p-3 focus:outline-none focus:border-color-secondary" placeholder="Company" />
                  <textarea rows={4} className="bg-gray-50 border border-gray-300 text text-sm rounder-lg block w-full rounded-lg p-3 focus:outline-none focus:border-color-secondary" ></textarea>
                  <button className="btn mt-10 mx-auto text-white">Send message</button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section id="footer">
          <div className="bg-color-primary-dark text-white">
            <div className="container mx-auto px-4 py-20">
              <div className="flex pb-10 flex-col md:flex-row justify-between">
                <div className="space-y-6 w-1/1 md:w-[30%]">
                  <h4 className="font-bold text-lg">Lazy Notes</h4>
                  <p className="leading-relaxed">
                    It's more than just a digital notepad it's your personal AI thought partner designed to make every single note more valuable.
                  </p>
                  <div className="flex items-center gap-5">
                    <p>Follow Us</p>
                    <i className="fab fa-facebook cursor-pointer hover:text-color-secondary"></i>
                    <i className="fab fa-instagram cursor-pointer hover:text-color-secondary"></i>
                    <i className="fab fa-twitter cursor-pointer hover:text-color-secondary"></i>
                    <i className="fab fa-youtube cursor-pointer hover:text-color-secondary"></i>
                  </div>
                </div>
                <div className="flex justify-between md:justify-around w-1/1 md:w-[30%]">
                  <div className="space-y-6">
                    <h4 className="font-bold">Quick links</h4>
                    <ul className="space-y-3">
                      <li><a href="/" className="underline hover:no-underline hover:text-color-secondary">Home</a></li>
                      <li><a href="#features" className="underline hover:no-underline hover:text-color-secondary">Features</a></li>
                      <li><a href="#testimonial" className="underline hover:no-underline hover:text-color-secondary">Testimonial</a></li>
                      <li><a href="#pricing" className="underline hover:no-underline hover:text-color-secondary">Pricing</a></li>
                      <li><a href="#blog" className="underline hover:no-underline hover:text-color-secondary">Blog</a></li>
                      <li><a href="#contact" className="underline hover:no-underline hover:text-color-secondary">Contact</a></li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-bold">Help</h4>
                    <ul className="space-y-3">
                      <li><a href="#home" className="underline hover:no-underline hover:text-color-secondary">About US</a></li>
                      <li><a href="#home" className="underline hover:no-underline hover:text-color-secondary">Printers</a></li>
                      <li><a href="#home" className="underline hover:no-underline hover:text-color-secondary">Career</a></li>
                      <li><a href="#home" className="underline hover:no-underline hover:text-color-secondary">Reviews</a></li>
                      <li><a href="#home" className="underline hover:no-underline hover:text-color-secondary">Terms & Condition</a></li>
                      <li><a href="#home" className="underline hover:no-underline hover:text-color-secondary">Help</a></li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6 w-1/1 md:w-[30%]">
                  <h4 className="font-bold text-lg">Newsletter</h4>
                  <p className="leading-relaxed">
                    Subscribe with email and loads of news will be sent to you
                  </p>
                  <div className="flex items-center">
                    <input type="text" className="w-3/4 lg:p-3 rounded-l-md text-color-gray p-2 bg-white focus:outline-none" placeholder="Enter your Email" />
                    <button type="submit" className="bg-color-secondary rounded-r-md px-4 py-2 lg:px-5 lg:py-3 hover:opacity-90"><SendIcon /></button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center pt-10 border-t border-color-gray">
                <p>2026 &copy; LazyNotes All Rights Reserved</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
