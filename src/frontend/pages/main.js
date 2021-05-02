const hh = require("hyperscript-helpers")(require("hyperscript"));
const fs = require("fs");
const {
  html,
  body,
  footer,
  main,
  div,
  meta,
  title,
  link,
  head,
  script,
  style,
  label,
} = hh;

const gpHTML = (data) => {
  const react = fs.readFileSync("./static/js/react/bundle.js", "utf8");
  return html(
    [
      head([
        meta({
          content: "width=device-width,initial-scale=1.0",
          name: "viewport",
        }),
        title("Covid Haldia Hospital Stats"),
        link({
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css",
        }),
        link({
          rel: "favicon",
          href: "https://fonts.googleapis.com/css?family=Lato",
        }),
        script({ src: "https://apis.google.com/js/api.js" }),
        style(styles),
      ]),
      body([
        script({
          src: "https://code.jquery.com/jquery-2.1.1.min.js",
        }),
        script({
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js",
        }),
        main([div("#mainContainer", div("#root"))]),
        footer(),
        script(react),
      ]),
    ],
    { style: "font-family: 'Lato', sans-serif;" }
  );
};

const styles = ``;

module.exports = { gpHTML };
