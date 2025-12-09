import { AmountProcessed } from "./AmountProcessed";
import { NextPayout } from "./NextPayout";
import { RevenueCard } from "./RevenueCard";

export const Display = () => {
  return (
    <div className="grid p-4 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* NextPayout card made larger using column span */}
      <div>
        <NextPayout amount={2300} orderCount={23} time={"today 4PM"} />
      </div>

      {/* Other cards stay normal */}
      <RevenueCard
        title="amount pending"
        amount="213,123"
        orderCount={123}
        showWarning={true}
      />

      <AmountProcessed title="amount processed" amount="213,123" />
    </div>
  );
};
