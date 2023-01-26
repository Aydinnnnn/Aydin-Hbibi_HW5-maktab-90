const notification = document.querySelector(".notification");
function showNotification(top, left, html, className) {
  notification.style.position = "relative";
  notification.style.top = `${top} px`;
  notification.style.left = `${left}px`;
  notification.innerHTML = `${html}`;
  notification.classList.add(`${className}`);
}
showNotification(150, 200, "Hello", "welecome");
// showNotification({
//   top: 122,
//   right: 133,
//   html: "Hello",
//   className: "welecome",
// });
