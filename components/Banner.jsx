/* eslint-disable react/prop-types */
function Banner( { title ,subtitles, text}) {
  return (
    <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">{title}</h2>
        {subtitles.map((subtitle, index) => (
          <p key={index} className="subtitle">
            {subtitle}
          </p>
        ))}
          <p className="text">{text}</p>
        </section>
      </div>
  );
}

export default Banner;