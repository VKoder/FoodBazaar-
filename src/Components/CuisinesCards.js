const CuisinesCards = ({ data }) => {
  const { brands } = data;

  return brands?.map((card) => (
    <div
      key={card.text}
      className="border-2 rounded-2xl px-6 py-4 text-sm font-semibold cursor-pointer"
    >
      <span className="text-gray-700">{card.text.slice(0, 30)}...</span>
    </div>
  ));
};
export default CuisinesCards;
