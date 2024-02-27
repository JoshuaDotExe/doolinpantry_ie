import React from 'react';



const AlternatingText = () => {
    const content = [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
          image: "https://via.placeholder.com/150"
        },
        {
          text: "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          image: "https://via.placeholder.com/150"
        },
        // Add more objects as needed
      ];
  return (
    <div className="flex flex-col">
      {content.map((item, index) => (
        <div key={index} className={`${index %  2 ===  0 ? 'md:pr-4' : 'md:pl-4'} md:w-1/2`}>
          <div className="flex flex-col md:flex-row">
            {index %  2 ===  0 && (
              <div className="md:w-1/2">
                <p>{item.text}</p>
              </div>
            )}
            <div className={`${index %  2 ===  0 ? 'md:w-1/2' : 'md:w-1/2'} md:flex md:justify-center`}>
              <img src={item.image} alt="Sample" className="w-full md:w-auto" />
            </div>
            {index %  2 !==  0 && (
              <div className="md:w-1/2">
                <p>{item.text}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternatingText;