import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ItemPage() {

  let { id } = useParams();

  return (
    <div className="item-page">
      <Header></Header>
      <h1>Hello from Item</h1>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default ItemPage;