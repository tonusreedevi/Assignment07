import { Link } from 'react-router-dom';

const FriendsDash= ({ friends }) => {
  if (!friends || friends.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 bg-[#f8fafc]">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e35]">
          Your Friends
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7">
        {friends.map((person) => (
          <Link
            to={`/friend/${person.id}`}
            key={person.id}
            className="block"
          >
            <div className="bg-white rounded-[25px] p-5 sm:p-6 md:p-7 flex flex-col items-center text-center transition-all cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-50 h-full">
              <div className="mb-6">
                <img
                  src={person.picture}
                  alt={person.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-sm"
                />
              </div>

              <h3 className="text-xl font-bold text-[#1a2e35] mb-1">
                {person.name}
              </h3>

              <p className="text-sm text-gray-400 mb-5">
                {person.days_since_contact}d ago
              </p>

              <div className="mb-6 h-8 flex items-center justify-center">
                {person.tags.length > 0 && (
                  <span className="px-5 py-1.5 bg-[#dcfce7] text-[#166534] text-[11px] font-bold rounded-full uppercase tracking-widest">
                    {person.tags[0]}
                  </span>
                )}
              </div>

              <div
                className={`w-full max-w-[150px] py-2.5 rounded-full text-white text-[11px] font-extrabold uppercase tracking-widest shadow-md ${
                  person.status === 'overdue'
                    ? 'bg-[#ff3b3b]'
                    : 'bg-[#1a4a3e]'
                }`}
              >
                {person.status.replace('-', ' ')}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FriendsDash;