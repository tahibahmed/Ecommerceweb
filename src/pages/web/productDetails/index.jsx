import React, { useEffect, useState } from "react";
import img from "../../../assets/images/shirt-cwf9SKdB.png";
import img1 from "../../../assets/images/shirt2-XQzG6elp.png";
import img2 from "../../../assets/images/shirt3-HwQ10bVo.png";
import img4 from "../../../assets/images/women2-wroTMLvf.jpg";
import ImageMagnifier from "../../../components/imageMagnifier";
import { useDispatch, useSelector } from "react-redux";
import { viewProductdata } from "../../../global/features/getproduct/ViewProductslice";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../global/features/getproduct/CartproductSlice";

const ProductDetail = () => {
  const [images, setImages] = useState({
    img1: img,
    img2: img1,
    img3: img2,
    img4: img4,
  });
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id)
  const { data, loading } = useSelector((state) => state.viewproducts);
  console.log(data)
  const [products, setProduct] = useState(data);

  const addTocartFunc = (products) => {
    dispatch(addToCart(products));
  };

  useEffect(() => {
    dispatch(viewProductdata(id));
  }, dispatch);

  const [activeImg, setActiveImage] = useState(data?.image);

  const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-col container mx-auto justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col mt-5  gap-6 md:w-2/4">
        <ImageMagnifier src={activeImg} width={500} height={500} />
        {/* <img src={activeImg} alt="" className='w-full '/> */}
        <div className="flex flex-row justify-between h-24 ">
          <img
            src={data?.image}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(data?.image)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 mb-80 md:w-2/4">
        <div>
          <span className=" text-violet-600 font-semibold">
            {data?.category}
          </span>
          <h1 className="text-3xl font-bold">{data?.title}</h1>
        </div>
        <p className="text-gray-700">{data?.description}</p>
        <h6 className="text-2xl font-semibold">$ {data?.price * amount}</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
              onClick={() => setAmount((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            onClick={() => addTocartFunc(products)}
            className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
