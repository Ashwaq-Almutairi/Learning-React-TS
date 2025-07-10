import ProductCard from './ProductCard.tsx';
import type {Unit} from './ProductCard.tsx';
type ProductListPageProps={
    onAddToCart:(unit:Unit)=>void;
}
function ProductListPage({onAddToCart}:ProductListPageProps){
    return(
    <>
    <ProductCard onAddToCart={onAddToCart}/>
    </>
    );
}
export default ProductListPage;