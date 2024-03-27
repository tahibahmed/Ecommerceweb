import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../../global/features/getproduct/Getproductslice";
const Cardcomponent = () => {

 
  const {data, loading} = useSelector((state=>state.products));
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getdata())
  },[])
  return (
    <div className=" grid lg:grid-flow-row container mx-auto  gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-flow-row mt-14    sm:grid-cols-2">
      {data?.map((item, index) => (
        <Link to={`/productdetail/${item.id}`}>
          <div key={index} className="card mb-4 ">
            <div className=" border-2">
              <img className="  h-[500px] " src={item.image} alt="lgo" />
            </div>
            <div>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cardcomponent;
