const baseUrl = "http://localhost:3001";

export function getItems() {
  return fetch(`${baseUrl}/items`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    });
}

export function addItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    });
}

export function deleteItem({ itemId }) {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("DELETE response:", data); // 👀 look here
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}
