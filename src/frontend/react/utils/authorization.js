function loadAuthLib() {
  return new Promise((resolve, reject) => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "292958275450-5a34nlb3v0rhu370mr2jia8suhm8u5v9.apps.googleusercontent.com",
          scope: "email",
          hd: ["source.one", "gmail.com"],
        })
        .then(() => {
          let auth = window.gapi.auth2.getAuthInstance();
          resolve(auth);
        })
        .catch((error) => {
          console.log("Error in init:", error);
          resolve(null);
        });
    });
  });
}

export async function serverSideVerification(email) {
  const options = {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  return fetch("/login", options);
}

export async function initializePublicOauth() {
  const auth = await loadAuthLib();
  return auth;
}
