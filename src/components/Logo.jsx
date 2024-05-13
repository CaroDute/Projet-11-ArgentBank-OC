// eslint-disable-next-line react/prop-types
function Logo ({src, alt}) {
  return (
    <>
      <img className="main-nav-logo-image" src={src} alt={alt} />
    </>
  );
}

export default Logo;