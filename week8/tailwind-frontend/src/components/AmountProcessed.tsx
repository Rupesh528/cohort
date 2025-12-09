export const AmountProcessed = ({ title, amount }) => {
  return (
    <div className="bg-white rounded shadow-md p-4 ">
      <div className="-text-grey-700">{title}?</div>
      <div className="font-bold">{amount}</div>
    </div>
  );
};
