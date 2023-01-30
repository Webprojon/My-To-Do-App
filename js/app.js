  // Selectors ************************
  const addBtn = document.querySelector(".add-lists");
  const lists = document.querySelector("#lists");
  const title = document.querySelector("h1");
  const inputTypingValue = document.querySelector("#todolist");

  // Event Listers **********************
  addBtn.addEventListener("click", addList);
  inputTypingValue.addEventListener("input", disableBtn);

  // Functions **************************
  function disableBtn(e) {
    let eValue = e.target.value;
    if (eValue.length >= 10) {
      addBtn.removeAttribute("disabled");
    } else {
      addBtn.setAttribute("disabled", "disabled");
    }
  }

  function addList() {
    const inputValue = document.querySelector("#todolist").value;
    const liElement = document.createElement("li");

    liElement.innerText = `${inputValue}`;
    lists.appendChild(liElement);

    // List Buttons *******************************
    const parentBtns = document.createElement("div");
    parentBtns.classList.add("btns");

    // Creating Button ***************************
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    parentBtns.appendChild(closeBtn);

    // Creating Button ****************************
    const completedBtn = document.createElement("button");
    completedBtn.classList.add("completed");
    completedBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    parentBtns.appendChild(completedBtn);

    // Parent Childing ***************************
    liElement.appendChild(parentBtns);

    closeList(closeBtn, completedBtn, liElement);
    // List Buttons *******************************

    title.style.display = "none";

    // removeLastChild Button ********************
    removeChildren(lists, title);
  }

// removing LastChild *************************
function removeChildren(lists, title) {
  const cancelBtn = document.querySelector(".cancel-btn");
  cancelBtn.addEventListener("click", () => {
    let item = lists.children[0];
    lists.removeChild(item);
    title.style.display = "block";
  });
}

function closeList(closeBtn, completedBtn, liElement) {
  closeBtn.addEventListener("click", () => {
    // liElement.style.display = "none";
    liElement.appendChild(closeBtn);
    liElement.innerText = "You haven't done this plane ! 🙄😔";
    liElement.style.color = "red";

    // Removing List ****************************
    removeList(liElement);
  });

  completedBtn.addEventListener("click", () => {
    // liElement.style.textDecoration = "line-through";
    liElement.innerText = "You've done this plane ! 🥇🎉";
    liElement.style.color = "green";

    // Removing List ****************************
    removeList(liElement);
  });
}

function removeList(liElement) {
  // Creating Button *****************************
  const close = document.createElement("button");
  close.classList.add("close");
  close.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  liElement.appendChild(close);
  close.addEventListener("click", () => {
    liElement.style.display = "none";
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputValue = document.querySelector("#todolist").value;
    const liElement = document.createElement("li");

    liElement.innerText = `${inputValue}`;
  }
});
