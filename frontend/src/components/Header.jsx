import { useParams } from "react-router";
import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Product/SmallProduct";
import ProductCarousel from "../pages/Product/ProductCarousel";

const Header = () => {
  const { keyword } = useParams();
  const { data, isLoading, error } = useGetTopProductsQuery(keyword);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>An error occurred: {error}</p>;
  }
  console.log(data);
  return (
    <>
      <div className="flex justify-around">
        <div className=" xl:block lg:hidden md:hidden:sm:hidden">
          <div className="grid grid-cols-2">
            {data.map((product) => (
              <div key={product._id}>
                <SmallProduct product={product} />
              </div>
            ))}
          </div>
        </div>
        <ProductCarousel />
      </div>
    </>
  );
};

export default Header;
