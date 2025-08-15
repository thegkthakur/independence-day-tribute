import React from 'react';

const Timeline = () => {
  const events = [
    { year: 1857, text: "First War of Independence" },
    { year: 1885, text: "Indian National Congress formed" },
    { year: 1905, text: "Swadeshi Movement" },
    { year: 1930, text: "Dandi March (Salt Satyagraha)" },
    { year: 1942, text: "Quit India Movement" },
    { year: 1947, text: "India gains Independence (15 Aug)" },
    { year: 1950, text: "Constitution comes into effect (26 Jan)" },
  ];
  return (
    <section id="timeline" className="py-12 bg-white/70 backdrop-blur">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700">
          India’s Independence Journey
        </h2>
        <div className="mt-8 max-w-3xl mx-auto text-left">
          {events.map((e, i) => (
            <div key={i} className="relative pl-6 py-4">
              <div className="absolute left-0 top-6 h-full w-1 bg-saffron/60" />
              <div className="inline-block rounded-lg bg-white shadow px-4 py-3 border">
                <div className="font-semibold text-navyBlue">{e.year}</div>
                <div className="text-sm">{e.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

  )
}
export default Timeline