import React from 'react'

const Contact = () => {
  return (
    <div className='absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
      <section class="">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-700">Contact Us</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 text-xl">Thank you for visiting! We hope that you have found what you needed on our website. If not, please feel free to contact us using any of the methods below!</p>
            <div class="space-y-8">
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Your email</label>
              </div>
              <div>
                  <label for="subject" class="block mb-2 text-sm font-medium text-gray-700">Subject</label>
              </div>
              <div class="">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-700">Your message</label>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
