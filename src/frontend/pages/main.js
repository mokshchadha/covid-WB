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
        title("Purba Medinipur Covid Info"),
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
        main([
          div(
            "#mainContainer",
            div("#root", {
              style:
                "display:flex;flex-direction:column;width:400px;min-height:640px; border: 1px solid rgba(0, 0, 0, 0.33); margin:auto; padding:10px;color: rgba(0, 0, 0, 0.66)",
            })
          ),
        ]),
        footer(),
        script(react),
        style(bodyStyles),
      ]),
    ],
    { style: "font-family: 'Lato', sans-serif;" }
  );
};

const styles = ``;
const bodyStyles = `width:500px;
`;

module.exports = { gpHTML };
