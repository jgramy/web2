import React from "react";

const Chart = () => {
  return (
    <div className="text-white h-screen my-10">
        <h1 className="text-3xl md:text-5xl font-semibold mb-7">Price Chart</h1>
      <div>
        <iframe
          title="Coinlib Widget"
          src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=10&pref_coin_id=1505&graph=yes"
          width="100%"
          height="645px"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Chart;
