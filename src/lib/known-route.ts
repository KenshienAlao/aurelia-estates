function isKnownRoute() {
  const path = window.location.pathname;
  return path === "/" || path === "" || path === "/index.html";
}

export default isKnownRoute;
