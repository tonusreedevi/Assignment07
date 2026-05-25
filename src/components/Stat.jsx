const Stat = () => {

  const overviewStats = [
    {
      label: 'Total Friends',
      value: 10,
    },
    {
      label: 'On Track',
      value: 3,
    },
    {
      label: 'Need Attention',
      value: 6,
    },
    {
      label: 'Interactions This Month',
      value: 12,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 px-4 sm:px-6 lg:px-10 py-10">

      {
        overviewStats.map((singleStat, index) => {

          return (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 font-[system-ui]"
            >

              <h1 className="text-4xl font-extrabold text-[#1a3a32] mb-2">
                {singleStat.value}
              </h1>

              <p className="text-[#64748b] font-extrabold text-center">
                {singleStat.label}
              </p>

            </div>
          );
        })
      }

    </div>
  );
};

export default Stat;