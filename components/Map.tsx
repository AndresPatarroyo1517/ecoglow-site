"use client";

export function Map() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden shadow-md border border-eco-green/20"
      style={{ height: '400px' }}
    >
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1CwZH7bKULORhgdlFx8dHOV8Li0ThGpA&hl=es&ehbc=2E312F"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}
