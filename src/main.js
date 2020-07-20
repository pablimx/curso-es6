class App {
  constructor() {
    this.repositories = [];

    this.formElement = document.getElementById("repo-form");
    this.listEl = document.getElementById("repo-list");

    this.registerHandlers();
  }

  registerHandlers() {
    this.formElement.onsubmit = (event) => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();

    this.repositories.push({
      name: "rocketseat.com.br",
      description: "Tire a sua idéia do papel e dê vida à sua startup.",
      avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
      html_url: "http://github.com/rocketseat/unform",
    });
    this.render();
  }

  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach((repo) => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);

      // <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" />
      //   <strong>rocketseat.com.br</strong>
      //   <p>Tire a sua idéia do papel e dê vida à sua startup.</p>
      //   <a target="_blank" href="http://github.com/rocketseat/unform"
      //     >Acessar</a
      //   >
    });
  }
}

new App();
