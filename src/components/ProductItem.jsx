import React from 'react'

const ProductItem = ({ farmerName, farmAddress,img,title,farmReviews,farmId,farmXp,farmProducts,farmCapacity,farmProductionRate}) => {
    return (
        <div className="flex h-full w-full justify-between m-8 p-8 items-center">
           <div className='rounded-md blue-glassmorphism items-center justify-between'>
           <img src={img} className="object-cover rounded-md shadow-2xl"/>
          
           
                <div className=' flex w-full h-full z-10 items-center text-center m-2 p-2 justify-between '></div>
                <h3 className="text-gradient lg:text-4xl text-3xl text-center pb-4 mb-4">{title}</h3>
                <div className="flex w-full items-center justify-between">
                    <ul className="text-left p-2 m-2 justify-between items-center">
              <li className="text-gradient font-bold">Farmer Name: <span className="ml-2 pl-2">{farmerName}</span></li>
                        <li className="text-gradient font-bold">Farm Address: <span className="ml-2 pl-2">{farmAddress}</span></li>
                        <li className="text-gradient font-bold">Farm Production:<span className="ml-2 pl-2">{farmProductionRate}-P.A</span></li>
                        <li className="text-gradient font-bold">Farm Reviews:<span className="ml-2 pl-2">{farmReviews}</span></li>
                        <li className="text-gradient font-bold">Farm Capacity:<span className="ml-2 pl-2">{farmCapacity}-TONS</span></li>
                        <li className="text-gradient font-bold">Farm XP:<span className="ml-2 pl-2">{farmXp}</span></li>
                        <li className="text-gradient font-bold mb-2 pb-0"></li>
                    
            <div className="w-full justify-between blue-glassmorphism p-2 m-2 text-center pt-4 mt-4">
                <button className="text-gradient font-bold z-10 text-center" onClick={() => setProducts('')}>
                    Start Shopping
                            </button>
                            </div>
                        </ul>
                    </div>
            </div>
    </div>
  )
}

export default ProductItem