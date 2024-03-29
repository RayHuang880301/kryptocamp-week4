import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import Decimal from "decimal.js";

export default function Header() {
  const { address } = useAccount();
  const { data: balance } = useBalance({
    address: address,
  });
  const [balanceDec, setBalanceDec] = useState<Decimal>(new Decimal(0));

  useEffect(() => {
    if (balance) {
      setBalanceDec(new Decimal(balance.formatted));
    }
  }, [balance]);

  return (
    <div className="bg-slate-500 py-4 px-4 w-full flex flex-row justify-between items-center">
      <p className="text-2xl">KryptoCamp</p>
      <div className="flex flex-row items-center gap-2">
        <p>Balance: {balanceDec.toFixed(2)}</p>
        <ConnectButton />
      </div>
    </div>
  );
}
