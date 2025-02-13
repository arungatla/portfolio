"use client";

import ThemeToggle from "@/components/theme-toggle";
import Image from "next/image";
import pp from "@/public/propic.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";




// import { Card, CardContent } from "@/components/ui/card";

// importing images dummy for now
// import i1 from "@/public/1.png";
// import i2 from "@/public/2.jpg";
// import i3 from "@/public/3.png";
// import i4 from "@/public/4.png";
// import i5 from "@/public/5.png";
// import i6 from "@/public/6.jpg";

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const downloadResume = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/AGResume-1.pdf"; // Replace with the actual path to your resume
      link.download = "Arun_Gatla_Resume.pdf"; // Replace with the desired file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 1000);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
 

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-12"
        >
          <div
            className="w-20 h-20 rounded-full overflow-hidden"
            onClick={openModal}
          >
            <Image
              src={pp}
              alt="Profile Picture"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            />
          </div>
          <ThemeToggle />
        </motion.header>
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={handleOutsideClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white dark:bg-black p-4 rounded-lg relative max-w-sm w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-black dark:text-white"
                >
                  <FaTimes size={20} />
                </button>
                <Image
                  src={pp}
                  alt="Profile Picture"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className=" space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Arun Gatla
              </h1>

              <p className="text-gray-600 dark:text-gray-400 ">
                Full Stack Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Hyderabad, Telangana.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">
                Building Scalable Applications
              </h2>
              <p className="test-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Expert in building web apps with{" "}
                <span className="text-black dark:text-white">Angular</span> and{" "}
                <span className="text-black dark:text-white">React</span> and{" "}
                <span className="text-black dark:text-white">Node.js</span> and{" "}
                <span className="text-black dark:text-white">Javascript</span>{" "}
                and{" "}
                <span className="text-black dark:text-white">TypeScript</span>{" "}
                and{" "}
                <span className="text-black dark:text-white">TailwindCSS</span>{" "}
                and <span className="text-black dark:text-white">Next.js</span>{" "}
                <span className="text-black dark:text-white">
                  ,Python(Flask, FastAPI), AWS, and microservices.
                </span>
              </p>
              <p className="test-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                I have a passion for building scalable applications and
                contributing to open-source projects. I have experience in
                building web applications with Angular, React, and Node.js. I
                have also worked with JavaScript, TypeScript, TailwindCSS, and
                Next.js. I have experience in building RESTful APIs and
                microservices with Node.js and Express. I have also worked with
                Python(Flask, FastAPI), AWS, and microservices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button
                className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105"
                onClick={downloadResume}
              >
                {isDownloading ? "Downloading..." : "Download Resume"}
              </Button>
              <Link
                href="https://github.com/arungatla"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6 " />
              </Link>
              <Link
                href="https://www.linkedin.com/in/arungatla/"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6 " />
              </Link>
              <Link
                href="https://x.com/iamarungatla"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaX className="w-6 h-6 " />
              </Link>
              {/* <Link
                href="/projects"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaYoutube className="w-6 h-6 " />
              </Link> */}
            </motion.div>
          </section>
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Oct 2021 - Present
                  </p>
                  <h3 className="text-lg font-semibold">
                    Full Stack Developer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">Accenture</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I am working as a Full Stack Developer at Accenture. I am
                responsible for building web applications with Angular,
                React,Python(Flask, FastAPI) and Node.js. I am also responsible
                for building RESTful APIs and microservices with Node.js and
                Python(Flask, FastAPI). I have also worked with  AWS.
              </p>
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Education
            </h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between ">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    2017 - 2021
                  </p>
                  <h3 className="text-lg font-medium">
                    Bachelor of Technology
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Computer Science and Engineering
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    MLR Institute of Technology
                  </p>
                </div>
              </div>
              {/* <p className="text-gray-600 dark:text-gray-400 text-sm">
                I have completed my Bachelor of Technology in Computer Science
                and Engineering from MLR Institute of Technology. 
              </p> */}
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                CGPA: 7.9
              </p>
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Projects
            </h2>
            <div className="text-center py-10">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Exciting projects are on the way.
              </p>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={i1} alt="project image 1" className="rounded-lg mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="">
                      <h3 className="font-medium">Portfolio</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Personal Portfolio, built with Next.js and TailwindCSS.

                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={i2} alt="project image 1" className="rounded-lg mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="">
                      <h3 className="font-medium">Portfolio 2</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Personal Portfolio, built with Next.js and TailwindCSS.

                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={i3} alt="project image 1" className="rounded-lg mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="">
                      <h3 className="font-medium">Portfolio 3</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Personal Portfolio, built with Next.js and TailwindCSS.

                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={i4} alt="project image 1" className="rounded-lg mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="">
                      <h3 className="font-medium">Portfolio 4</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Personal Portfolio, built with Next.js and TailwindCSS.

                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={i5} alt="project image 1" className="rounded-lg mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="">
                      <h3 className="font-medium">Portfolio 5</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Personal Portfolio, built with Next.js and TailwindCSS.

                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={i6} alt="project image 1" className="rounded-lg mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="">
                      <h3 className="font-medium">Portfolio 6</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Personal Portfolio, built with Next.js and TailwindCSS.

                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div> */}
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Arun Gatla. All rights reserved.
            </p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
