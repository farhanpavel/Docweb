import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const testimonials = [
    {
      quote:
      "Quo nulla nisi velit magnam cum doloribus occaecati praesentium repellat. Quo nulla officiis autem numquam explicabo inventore repellat illum. Laborum repellendus fugiat saepe. Et unde tenetur facere maxime magni recusandae dolor. Nemo iste ab commodi quasi maxime assumenda. Laboriosam eligendi doloremque dolorum ipsa autem aperiam minus provident cumque. Voluptatem fuga quidem ut sapiente. Nobis placeat illum. Laboriosam magnam ducimus esse suscipit perferendis odio dolores. Minima reiciendis nostrum hic laborum."  ,
      author: "Farhan Pavel",
      position: "Student",
   avatar:"/img/me.jpg"
    },
    {
      quote:
      "Soluta amet quo nemo. Expedita harum excepturi labore unde eius. In voluptatem deserunt est assumenda quidem. Iusto non illo laboriosam itaque. Molestias officiis minus excepturi officiis veritatis qui. Non veniam accusamus maxime beatae dolor aut perferendis. Expedita corrupti consequatur deserunt. Necessitatibus quas quo placeat deserunt quia voluptates porro quae a.",
      author: "Dr. Turon",
      position: "Student",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 100); // Adjust the interval duration as needed for smoother animation

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (progress === 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  }, [progress, testimonials.length]);

  return (
    <div className='bg-blue-500 space-y-4 rounded-md inline-block font-sans text-white p-16'>
      <div className="relative mb-5 pt-1">
        <div className="mb-4 flex h-1 overflow-hidden rounded bg-blue-500 text-xs">
          <div style={{ width: `${progress}%` }} className="bg-white"></div>
        </div>
      </div>
      <figure className="max-w-screen-md mx-auto text-left ">
        <svg
          className="w-10 h-10 mx-auto mb-3 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p className="text-sm font-sans font-bold font-medium dark:text-white">
            {testimonials[currentIndex].quote}
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <img
            className="w-20 h-20 rounded-full"
            src={testimonials[currentIndex].avatar}
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-white dark:divide-gray-700">
            <cite className="pe-3 font-medium dark:text-white">
              {testimonials[currentIndex].author}
            </cite>
            <cite className="ps-3 text-sm">
              {testimonials[currentIndex].position}
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
