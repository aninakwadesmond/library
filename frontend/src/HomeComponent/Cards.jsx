import Card from "../Components/Card";

function Cards() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 space-y-5 md:grid-cols-3 lg:space-y-0">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
