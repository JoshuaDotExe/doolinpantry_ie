import React from 'react';



const AlternatingText = ({ content }) => {
  
  var moreButton = (text, link) => {
    console.log(text)
    console.log(link)
    return <a href={link}>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        {text}
      </button>
    </a>
    
  }

  var titleAndPara = (item) => {
    var buttons = []
    item.buttons.forEach((bttn) => (
      buttons.push(moreButton(bttn.text, bttn.link)) 
    ))
    return <div className='flex flex-col items-stretch w-2/3'>
      <b>{item.title}</b>
      <p className='self-center pt-5'>{item.text}</p>
      {buttons}
    </div>
  }
  
  return (
    <div className="flex flex-col mx-auto">
      {content.map((item, i) => (
        <div className='flex justify-center flex-row py-5'>
          {i % 2 === 0 && titleAndPara(item)}
          <img className='self-center px-5' src={item.image} alt="default pic" />
          {i % 2 !== 0 && titleAndPara(item)}
        </div>
      ))}
    </div>
  );
};

export default AlternatingText;