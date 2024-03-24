import React from 'react'
import AlternatingText from './components/AlternatingText'

const Sustainability = () => {

    const content = [
        {
          title: "Environmental Policy",
          text: "Eiusmod dolor consequat tempor sunt tempor nulla ad amet id aute. Velit laborum occaecat incididunt quis dolore sint nulla est culpa. Pariatur excepteur esse in anim sunt tempor exercitation mollit amet laboris pariatur mollit. Do velit Lorem ea proident labore tempor irure id quis amet laborum. Reprehenderit reprehenderit esse quis ex quis fugiat. Cillum irure quis sit labore elit duis aliquip sint.",
          image: "https://via.placeholder.com/150",
          buttons: []
        },
        {
          title: "LNT info-poster of cort?",
          text: "Eu aute ut laborum consectetur nulla. Fugiat commodo ipsum nulla esse pariatur anim. Duis minim voluptate Lorem incididunt dolor consequat esse. Officia amet tempor incididunt culpa amet cupidatat enim sunt minim ut non id. Qui ea laboris do sunt nostrud et sint ipsum ut eiusmod est. Do fugiat sit proident anim cupidatat. Consequat occaecat eiusmod cupidatat nostrud sint et ea et dolor in esse.",
          image: "https://via.placeholder.com/150",
          buttons: []
        },
        {
          title: "Local Bus Routes",
          text: "Bus Eireann's 350 route passes through a number of towns along the Co. Clare coastline going from Ennis to Galway.",
          image: "https://via.placeholder.com/150",
          buttons: [
            {
                text: "More...",
                link: "https://www.buseireann.ie/inner.php?id=406&form-view-timetables-from=&form-view-timetables-to=&form-view-timetables-route=350&form-view-timetables-submit=1"
            },
          ]
        },
      ];

  return (
    <div className='absolute p-4 text-center'>
      <AlternatingText content={content}></AlternatingText>
    </div>
  )
}

export default Sustainability