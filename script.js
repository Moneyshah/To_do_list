var taskInput = document.getElementById("task");
var startInput = document.getElementById("start");
var endInput = document.getElementById("end");
var descriptionInput = document.getElementById("description");

var toastIdCounter = 0;

var form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  var toast = document.createElement("div");
  toast.classList.add("toast", "show");

  var toastId = "toast-" + toastIdCounter;
  toast.id = toastId;
  toastIdCounter++;

  var toastHeader = document.createElement("div");
  toastHeader.classList.add("toast-header");

  var taskName = document.createElement("strong");
  taskName.classList.add("me-auto");
  taskName.textContent = taskInput.value;

  var closeButton = document.createElement("button");
  closeButton.setAttribute("type", "button");
  closeButton.classList.add("btn-close");
  closeButton.setAttribute("data-bs-dismiss", "toast");

  closeButton.addEventListener("click", function () {
    var toastToRemove = document.getElementById(toastId);
    if (toastToRemove) {
      toastToRemove.remove();
    }
  });

  toastHeader.appendChild(taskName);
  toastHeader.appendChild(closeButton);

  var toastBody = document.createElement("div");
  toastBody.classList.add("toast-body");

  var startDate = document.createElement("h6");
  startDate.textContent = "Start date: " + startInput.value;

  var endDate = document.createElement("h6");
  endDate.textContent = "End date: " + endInput.value;

  var description = document.createElement("p");
  description.textContent = "Description: " + descriptionInput.value;

  toastBody.appendChild(startDate);
  toastBody.appendChild(endDate);
  toastBody.appendChild(document.createElement("hr"));
  toastBody.appendChild(description);

  toast.appendChild(toastHeader);
  toast.appendChild(toastBody);

  var toastContainer = document.querySelector(".toast_area");
  toastContainer.appendChild(toast);

  form.reset();
});
