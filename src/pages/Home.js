import React from 'react'

const Home = () => {
    return (
        <div className='flex flex-col text-center w-full items-center'>
          <div className='flex flex-row w-2/3 py-10'>
            <div className='w-1/2 px-5'>
              <h1><b>Where did our recipe for brown soda bread come from?</b></h1>
              <p>When we were getting ready to open our restaurant StoneCutters Kitchen, Doolin in our first season 2001, we were working outside painting and we had a visit from an elderly lady who lived across the road and up a small boreen, her house looked down on the restaurant and she was curious about the new owners and what we were planning to do.</p>
              <p>We stopped and had a cuppa with her and she told us who built and owned the old cottage that is now our restaurant over the years.  We told her what we were hoping to create and during the conversation it came up that we wanted to do a signature traditional brown soda bread as part of our menu.  She very kindly offered us her family recipe to use should we want to.  Of course we jumped at it, such an honour!  From such a wonderful lady.</p>
              <p>Unfortunately May Barrett has since passed away but some of her relatives still live and farm around us here in Doolin.</p>
              <p>We sold our restaurant in late 2021 and decided to carry on with Mary’s bread in the form of a ‘Do it Yourself’ kit which we hope you will enjoy both making and eating.</p>
              <p>Full instructions are on the packet.</p>
            </div>
            <div className='flex self-center justify-center w-1/3 justify-items-center'>
              <img className='' src= {process.env.PUBLIC_URL + "/breadmix_landscape.png"} alt="Doolin Pantry Brown Soda Bread Mix Logo" />
            </div>
            
          </div>
          <div className='flex flex-row w-2/3 py-10'>
            <div className='flex self-center justify-center w-1/3 justify-items-center'>
              <img className='self-center' src= {process.env.PUBLIC_URL + "/Bread loaf.png"} alt="" />
            </div>
            <div className='w-1/2 px-5'>
              <h1><b>Faery Cross:</b></h1>
              <p>Soda Cake is soda bread gently shaped into a flattish round, then deeply cut with a cross on the top. The cross on the soda bread has several explanations, Legend has it that folks did it to "let the devil out" while it's baking for good luck, and others say that it made it easy to divide into 4 pieces. It was also a symbol for a cross during Christian holidays.</p>
              <p>The reality is that it will let the bread “Flower” to let the bread stretch and expand as it rises in the oven and allows it to cook more evenly.</p>
            </div>
          </div>
          <img className='py-10' src={process.env.PUBLIC_URL + "/food_trail_logo.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/BurrenBeoLogo2_1.jpg"} alt="" />
        </div>
      );
}

export default Home;