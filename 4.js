const notification = document.querySelector(".notification");
function showNotification(top, right, html, className) {
  notification.style.top = `${top} rem`;
  notification.style.right = `${right}rem`;
  notification.innerHTML = `${html}`;
  notification.classList.add(`${className}`);
}
showNotification(10, 20, "Hello", "welecome");
// showNotification({
//   top: 122,
//   right: 133,
//   html: "Hello",
//   className: "welecome",
// });
