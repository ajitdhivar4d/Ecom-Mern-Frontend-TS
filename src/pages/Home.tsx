import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useGetProductsQuery } from "../redux/api/productSlice";
import Product from "./Products/Product";

interface ProductArg {
  _id: string;
  name: string;
  image: string | undefined;
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  brand: string;
  category: string;
  reviews: any[];
  description: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

const Home = () => {
  const { keyword } = useParams();

  const page = 1;
  const pageSize = 23;

  const { data, isLoading, isError } = useGetProductsQuery({
    keyword,
    page,
    pageSize,
  });

  const products = data?.products || [];

  const shuffledProducts = shuffleArray(products as ProductArg[]);

  return (
    <div className="home-container">
      <Header />
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error..</div>
      ) : (
        <>
          <div className="special-products">
            <h1>Special Products</h1>
            <Link to="/shop" className="link-shop">
              Shop
            </Link>
          </div>

          <div className="product-container">
            {shuffledProducts?.length === 0 && keyword ? (
              <div>No products found for {keyword}.</div>
            ) : (
              shuffledProducts?.map((product: ProductArg) => (
                <Product key={product._id} product={product} />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

function shuffleArray<T>(array: T[]): T[] {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array");
  }
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default Home;
