var host = "https://habibd-e8edd-default-rtdb.firebaseio.com";

async function postService(body, path) {
  const request = await fetch(`${host}/${path}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = {};

  try {
    data = await request.json();
  } catch (error) {
    console.log(error);
  }

  return data;
}

async function getService(path) {
  let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const request = await fetch(`${host}/${path}`, {
    method: "GET",
    headers,
  });

  let data = {};

  try {
    data = await request.json();
  } catch (error) {
    console.log(error);
  }
  return data;
}

const services = {
  postUser: (body) => postService(body, "usuario.json"),
  postProperty: (body) => postService(body, "inmueble.json"),
  getBooks: () => getService("books"),
};

export { postService, getService, services };
