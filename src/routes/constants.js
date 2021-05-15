const isEmailVerified = (email) => {
  const mailMap = {
    "chadhamoksh@gmail.com": {
      name: "Moksh",
      email: "chadhamoksh@gmail.com",
      phone: "9459845615",
    },
    "rbarsharoy@gmail.com": {
      name: "Barsha",
      email: "rbarsharoy@gmail.com",
      phone: "8016518175",
    },
    "debadrita.rim@gmail.com": {
      name: "Debadrita",
      email: "debadrita.rim@gmail.com",
      phone: " 8900481286",
    },
    "pratyushaki151198@gmail.com": {
      name: "Pratyusha",
      email: "pratyushaki151198@gmail.com",
      phone: "9647244429",
    },
    "007.sayandas@gmail.com": {
      email: "007.sayandas@gmail.com",
      name: "Sayan",
      phone: "8900644516",
    },
    "ayushigodara629@gmail.com": {
      name: "Ayushi",
      email: "ayushigodara629@gmail.com",
      phone: "********",
    },
    "sana.sanjeevani25@gmail.com": {
      name: "Sanjeevani",
      email: "sana.sanjeevani25@gmail.com",
      phone: "**********",
    },
    "iamprithwiraj300@gmail.com": {
      name: "Prithwi",
      email: "iamprithwiraj300@gmail.com",
      phone: "7814967987",
    },
    "tinniurmi@gmail.com": {
      name: "Sanjana",
      email: "tinniurmi@gmail.com",
      phone: "9082467515",
    },
    "ranadipmanna22@gmail.com": {
      email: "ranadipmanna22@gmail.com",
      name: "Ranadip",
      phone: "7908127884",
    },
    "sujaykapat29@gmail.com": {
      email: "sujaykapat29@gmail.com",
      name: "Sujay",
      phone: "7001774289",
    },
    "soumyadipbindai369@gmail.com": {
      name: "Soumya",
      email: "soumyadipbindai369@gmail.com",
      phone: "9932392897",
    },
    "ipshitadas793@gmail.com": {
      email: "ipshitadas793@gmail.com",
      name: "Ipshita",
      phone: "9434477540",
    },
    "ritikabera18@gmail.com": {
      email: "ritikabera18@gmail.com",
      name: "Ritika",
      phone: "6289790508",
    },
    "preetikaitis@gmail.com": {
      email: "preetikaitis@gmail.com",
      name: "Pritika",
      phone: "7063634795",
    },
  };
  if (!Object.keys(mailMap).includes(email))
    throw "Sorry, Person Not Authorized!";

  return mailMap[email];
};

module.exports = {
  isEmailVerified,
};
