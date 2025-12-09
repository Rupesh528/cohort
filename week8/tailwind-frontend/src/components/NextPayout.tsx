export const NextPayout = ({ amount, orderCount, time }) => {
  return (
    <div className="bg-blue-500  flex flex-col rounded-md ">
      <div className="text-white p-4">Next Payout</div>
      <div className="text-white flex flex-row justify-between pl-4 pr-4 pb-4">
        <div className="font-bold ">$ {amount}</div>
        <div className="underline">{orderCount} Orders</div>
      </div>
      <div className="bg-[#0E4F82] flex flex-row justify-between rounded-md p-3">
        <div className="text-white">Next Payment Date:</div>
        <div className="text-white">{time}</div>
      </div>
    </div>
  );
};
