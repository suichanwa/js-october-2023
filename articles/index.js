const submit = document.getElementById("form");
const arata = document.getElementById("arata");

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  return await response.json();
};

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(submit);
  const json = JSON.stringify(Object.fromEntries(formData.entries()));
  console.log(json);
  postData("http://localhost:3000/articles", json);
});

arata.addEventListener("click", () => {
  fetch("http://localhost:3000/articles")
    .then((data) => data.json())
    .then((response) => {
      response.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Titlu: ${item.titlu}, Autor: ${item.autor}, Content: ${item.descriere}, Data: ${item.data};`
        document.body.appendChild(listItem);
      });
    });
});