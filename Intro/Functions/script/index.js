const person = {
  name: "Magdy Elshrief",
  age: 30,
  location: "Damanhur",
  email: "magdy.elshrief@example.com",
  hobbies: ["reading", "coding"],
};

const viewPerson = (person) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h2>${person.name}</h2>
    <p>Age: ${person.age}</p>
    <p>Location: ${person.location}</p>
    <p>Email: ${person.email}</p>
    <p>Hobbies: ${person.hobbies.join(", ")}</p>
  `;
  return newArticle;
};

const main = document.querySelector("main");
main.appendChild(viewPerson(person));
