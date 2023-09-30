const burgerMenus = document.querySelectorAll(".burger-menu");
const menuContainers = document.querySelectorAll(".menu-container");

burgerMenus.forEach((menu) => {
  menu.addEventListener("click", () => {
    menuContainers.forEach((menu2) => {
      menu2.classList.toggle("active");
    });
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

//Initialize horizontal timeline
try {
  timeline(document.querySelectorAll(".timeline"), {
    forceVerticalMode: 768,
    mode: "horizontal",
    visibleItems: 3,
    verticalTrigger: "-1550%",
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

function addImgBlockListeners() {
  checkAndDisableLinks();
  const imgBlocks = document.querySelectorAll(".image-block");
  imgBlocks.forEach((img) => {
    const copy = img.querySelector(".copy");
    //initial click on image block
    img.querySelector("img").addEventListener("click", () => {
      let siblings = Array.from(img.parentElement.children);
      siblings.splice(siblings.indexOf(img), 1);
      console.log(siblings);
      if (img.classList.contains("active")) {
        img.classList.remove("active");
        copy.classList.remove("visible");
        siblings.forEach((sibling) => {
          sibling.classList.remove("inactive");
        });
      } else if (img.classList.contains("inactive")) {
        img.classList.remove("inactive");
        img.classList.add("active");
        copy.classList.add("visible");
        siblings.forEach((sibling) => {
          let siblingCopy = sibling.querySelector(".copy");
          sibling.classList.remove("active");
          sibling.classList.add("inactive");
          siblingCopy.classList.remove("visible");
        });
      } else {
        img.classList.add("active");
        copy.classList.add("visible");
        siblings.forEach(function (sibling) {
          sibling.classList.add("inactive");
        });
      }
    });
  });
}
