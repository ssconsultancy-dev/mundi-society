import React from "react";

const boardMembers = [
  {
    name: "Mr. Karam Chand",
    position: "President",
    image: "/images/president.jpg",
  },
  {
    name: "Mr Anish",
    position: "Secretary",
    image: "/images/secretary.jpg",
  },
];

const BoardMembers = () => {
  return (
    <section id="board" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Board Members
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 mt-2">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
