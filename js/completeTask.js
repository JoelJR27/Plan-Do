export function markaAsComplete() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const paragraphTask = document.querySelectorAll("p .task-content");
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("change", () => {
      let id = checkbox.id;
      let idWithoutSlash = id.replace("/", "");
      console.log(idWithoutSlash);
      document.getElementById(idWithoutSlash).classList.toggle("done");
    })
  );
}
