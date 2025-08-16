import React, { useState } from 'react';
import { timelineData } from '../data/timelineData';

const Timeline = () => {

  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="timeline" className="py-12 bg-white/70 backdrop-blur">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700">
        India’s Independence Journey
      </h2>
      <div className="mt-8 max-w-3xl mx-auto text-left">
        {timelineData.map((e, i) => (
          <div key={i} onClick={() => toggleExpand(i)} className="relative pl-6 py-4 ">
            <div className="absolute left-0 top-6 h-full w-1 bg-saffron/60" />
            <div className="inline-block rounded-lg bg-white shadow px-4 py-3 border cursor-pointer">
              <div className="text-sm font-semibold text-gray-800">{e.year} - {e.title}</div>
              <div className="text-sm">{e.short}</div>
            </div>
            {expanded === i && (
              <div className="mt-3 p-4 text-gray-700 text-justify">
                <p>{e.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

  )
}
export default Timeline