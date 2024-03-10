import React from 'react';



const AlternatingText = () => {
    const content = [
        {
          title: "Refill.ie Initiative",
          text: "Refill Ireland is an environmental project to make Irish towns and cities tap water refill friendly for everyone while on the go.",
          image: "https://via.placeholder.com/150"
        },
        {
          title: "Doolin Tourism",
          text: "Situated on the Wild Atlantic Way, boasting some of the most breathtaking scenery in Ireland and with a colourful and welcoming village ready to host you during your stay.",
          image: "https://via.placeholder.com/150"
        },
        {
          title: "Ecotourism & our UNESCO Geopark",
          text: "We are proud members of the Burren Ecotourism Network, committed to the promotion of responsible tourism that conserves the environment and improves the well-being of local people. We work together to promote ‘The Burren & Cliffs of Moher UNESCO Global Geopark’ as a leading sustainable visitor destination, celebrated for high standards in visitor experience, conservation & learning.",
          image: "https://via.placeholder.com/150"
        },
        {
          title: "Environmental Policy for Doolin Pantry",
          text: "The staff and management of the Doolin Pantry are committed to our Environmental Policy and Plan.  This plan aims to reduce our carbon footprint by reducing our water and energy consumption and reducing our waste production and increase our level of recycling further, without impacting on the enjoyment of our customers.",
          image: "https://via.placeholder.com/150"
        },
        {
          title: "Burren Ecotourism Network",
          text: "The Burren Ecotourism Network (the B.E.N.) is a membership organisation embedded in a sustainable tourism ethos.  It was formally established in 2011.",
          image: "https://via.placeholder.com/150"
        },
        // Add more objects as needed
      ];
  
  var titleAndPara = (title, text) => {
    return <div className='flex flex-col'>
      <b>{title}</b>
      <p>{text}</p>
    </div>
  }
  
  return (
    <div className="flex flex-col">
      {content.map((item, i) => (
        <div className='flex flex-row'>
          {i % 2 === 0 && titleAndPara(item.title, item.text)}
          <div>
            <img src={item.image} alt="default pic" />
          </div>
          {i % 2 !== 0 && titleAndPara(item.title, item.text)}
        </div>
      ))}
    </div>
  );
};

export default AlternatingText;