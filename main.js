const burgerMenus = document.querySelectorAll(".burger-menu");
const menuContainers = document.querySelectorAll(".menu-container");

burgerMenus.forEach((menu) => {
  menu.addEventListener("click", () => {
    menuContainers.forEach((menu2) => {
      menu2.classList.toggle("active");
    });
  });
});

//Initialize horizontal timeline
try {
  timeline(document.querySelectorAll(".timeline"), {
    mode: "horizontal",
    visibleItems: 3,
  });
} catch (error) {
  throw new Error("Timeline is not defined");
}

const timelineImages = document.querySelectorAll(".content-wrapper");

timelineImages.forEach((img) => {
  const correspondingPanel = img.querySelector(".info-panel");

  img.addEventListener("mouseenter", () => {
    console.log(correspondingPanel);
    correspondingPanel.classList.add("hovered");
  });
  img.addEventListener("mouseleave", () => {
    correspondingPanel.classList.remove("hovered");
  });
});
