import { notFound } from "next/navigation";

interface ProductDetailsProps {
  params: {
    productId: string;
  };
  searchParams: object;
}

export default function ProductDetails(props: ProductDetailsProps) {
  if (Number(props.params.productId) > 1000) notFound();
  return <h1>Product details - {props.params.productId}</h1>;
}
