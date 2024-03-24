import React from 'react'
import AlternatingText from './components/AlternatingText'

const Geopark = () => {

    const content = [
        {
          title: "Geopark Info",
          text: "Aliqua sit incididunt nisi labore consectetur eiusmod reprehenderit in cillum duis ex. Laboris consectetur labore tempor elit exercitation qui reprehenderit. In id officia exercitation est adipisicing.",
          image: process.env.PUBLIC_URL + "/Geopark_Logo.jpg",
          buttons: []
        },
        {
          title: "BEN Info",
          text: "Cupidatat in anim ex adipisicing. Anim dolore fugiat ex dolor. Excepteur excepteur Lorem qui ea dolor voluptate aute. In occaecat magna fugiat excepteur nisi culpa mollit pariatur esse fugiat non. Do laborum exercitation ipsum culpa deserunt eu sit reprehenderit ex est duis. Esse dolor culpa dolor cupidatat nisi fugiat labore cillum qui ea tempor est sint proident.",
          image: process.env.PUBLIC_URL + "/BEN_Logo.jpg",
          buttons: []
        },
        {
          title: "Ecotourism & our UNESCO Geopark",
          text: "We are proud members of the Burren Ecotourism Network, committed to the promotion of responsible tourism that conserves the environment and improves the well-being of local people. We work together to promote ‘The Burren & Cliffs of Moher UNESCO Global Geopark’ as a leading sustainable visitor destination, celebrated for high standards in visitor experience, conservation & learning.",
          image: "https://via.placeholder.com/150",
          buttons: []
        },
        {
          title: "Environmental Policy for Doolin Pantry",
          text: "The staff and management of the Doolin Pantry are committed to our Environmental Policy and Plan.  This plan aims to reduce our carbon footprint by reducing our water and energy consumption and reducing our waste production and increase our level of recycling further, without impacting on the enjoyment of our customers.",
          image: "https://via.placeholder.com/150",
          buttons: []
        },
        {
          title: "Burren Ecotourism Network",
          text: "The Burren Ecotourism Network (the B.E.N.) is a membership organisation embedded in a sustainable tourism ethos.  It was formally established in 2011.",
          image: "https://via.placeholder.com/150",
          buttons: []
        },
        // Add more objects as needed
      ];

  return (
    <div className='absolute p-4 text-center'>
      <AlternatingText content={content}></AlternatingText>
    </div>
  )
}

export default Geopark