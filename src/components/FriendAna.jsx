import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const FriendAna = ({ events }) => {
  const COLORS = ["#8b5cf6", "#1a4a3e", "#34d399", "#facc15"];

  // helper function (student style)
  const buildChartData = (events) => {
    const temp = {};

    events.forEach((event) => {
      if (temp[event.type]) {
        temp[event.type] += 1;
      } else {
        temp[event.type] = 1;
      }
    });

    const result = [];

    for (let key in temp) {
      result.push({
        name: key,
        value: temp[key],
      });
    }

    return result;
  };

  const Loader = () => {
    return (
      <div className="flex justify-center items-center py-32 font-[system-ui] font-bold">
        <div className="w-10 h-10 border-4 border-[#1a4a3e] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  };

  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const processed = buildChartData(events || []);
      setChartData(processed);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [events]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-[1000px] mx-auto p-6 sm:p-10 font-[system-ui] font-bold">

      {/* Title */}
      <h1 className="text-[28px] sm:text-[40px] font-[800] text-[#1a2e35] mb-6 sm:mb-8 font-[system-ui]">
        Friendship Analytics
      </h1>

      {/* Card */}
      <div className="bg-white p-6 sm:p-10 rounded-[25px] border border-gray-100 shadow-sm">

        <h3 className="text-[#1a4a3e] font-bold text-base sm:text-lg mb-6 font-[system-ui]">
          Interaction Overview
        </h3>

        {/* Chart */}
        <div className="h-[300px] sm:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={4}
                dataKey="value"
              >
                {chartData.map((item, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  fontFamily: "system-ui",
                  fontWeight: "bold",
                }}
              />

              <Legend verticalAlign="bottom" iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default FriendAna;