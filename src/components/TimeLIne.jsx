import { useState, useEffect } from "react";

const Loader = () => (
  <div className="flex justify-center items-center py-32">
    <div className="w-10 h-10 border-4 border-[#1a4a3e] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const filterEvents = (events, filter) => {
  if (filter === "All") return events;
  return events.filter((e) => e.type === filter);
};

const Timeline = ({ events = [] }) => {
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setList(filterEvents(events, filter));
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [events, filter]);


  if (!loading && events.length === 0) {
    return (
      <div className="max-w-[900px] mx-auto p-6 md:p-12">
        <h1 className="text-3xl font-bold mb-6">Timeline</h1>

        <div className="bg-white p-10 border border-dashed rounded-xl text-center text-gray-400">
          No data found. Start by adding your first interaction.
        </div>
      </div>
    );
  }

  if (loading) return <Loader />;

  return (
    <div className="max-w-[900px] mx-auto p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6">Timeline</h1>

      {/* Filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-6 p-3 border rounded-lg w-full md:w-64"
      >
        <option value="All">All</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
        <option value="Meetup">Meetup</option>
      </select>

      {/* List */}
      {list.length === 0 ? (
        <div className="bg-white p-8 border border-dashed text-center text-gray-400 rounded-xl">
          No {filter} interactions found.
        </div>
      ) : (
        <div className="space-y-4">
          {list.map((event) => (
            <div
              key={event.id}
              className="bg-white p-4 rounded-xl shadow flex gap-4"
            >
              <div className="text-2xl">{event.icon}</div>
              <div>
                <p>
                  <b>{event.type}</b> with {event.with}
                </p>
                <p className="text-gray-400 text-sm">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;

