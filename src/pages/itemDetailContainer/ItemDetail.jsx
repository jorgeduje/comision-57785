import CounterContainer from "../../components/counter/CounterContainer";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div>
        <h2>{item.title}</h2>
        <CounterContainer />
      </div>
    </>
  );
};

export default ItemDetail;
