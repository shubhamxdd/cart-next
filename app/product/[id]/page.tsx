import { Metadata, ResolvingMetadata } from "next";
import DetailPage from "./DetailPage";

type metadataProps = {
  params: { id: string };
};

const ProductDetail = () => {
  return (
    <>
      <DetailPage />
    </>
  );
};

export async function generateMetadata(
  { params: { id } }: metadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return {
    title: data.title,
    description: data.description,
  };
}

export default ProductDetail;
