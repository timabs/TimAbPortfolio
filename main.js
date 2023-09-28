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
    forceVerticalMode: 768,
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
    correspondingPanel.classList.add("hovered");
  });
  img.addEventListener("mouseleave", () => {
    correspondingPanel.classList.remove("hovered");
  });
});

function checkAndDisableLinks() {
  const iconWrappers = document.querySelectorAll(".icon-wrapper");
  iconWrappers.forEach((wrapper) => {
    let wrapperLinks = wrapper.querySelectorAll("a");
    wrapperLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const grandparent = link.parentElement.parentElement;
        const gpOpacity = window
          .getComputedStyle(grandparent)
          .getPropertyValue("opacity");

        if (gpOpacity === "0") {
          e.preventDefault(); // Prevent the default action (navigation)
        }
      });
    });
  });
}
