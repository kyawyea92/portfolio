import React, { Component }  from 'react';
const data = [
  { path: "/images/Java96.svg", altName: "Java" },
  { path: "/images/Spring96.svg", altName: "Spring" },
  { path: "/images/React100.svg", altName: "React" },
  { path: "/images/Docker96.svg", altName: "Docker" },
  { path: "/images/MongoDB.png", altName: "MongoDb" },
  { path: "/images/Postgres96.svg", altName: "Postgres" },
  { path: "/images/AWS96.svg", altName: "AWS" },
  { path: "/images/Tailwind96.svg", altName: "Tailwind" },
];
export default function Languages() {
  const loopLanguages = () => {
    return (
      <div className="w-4/5">
        <label className="text-5xl">Strong in the following tech:</label>
        <div className="flex overflow-hidden space-x-16 h-32 my-10">
        <div class="flex space-x-24 animate-loop-scroll">
          {data.map((d) => (
            <img
              loading="lazy"
              className="max-w-none"
              src={d.path}
              alt={d.altName}
            />
          ))}
        </div>
        <div class="flex space-x-24 animate-loop-scroll" aria-hidden="true">
          {data.map((d) => (
            <img
              loading="lazy"
              className="max-w-none"
              src={d.path}
              alt={d.altName}
            />
          ))}
        </div>
      </div>
      </div>
    );
  };

  return <div className="flex justify-center">{loopLanguages()}</div>;
}
