const imagePaths = [
  "image/suppl_1.jpg",
  "image/suppl_2.jpg",
  "image/suppl_3.jpg",
  "image/suppl_4.jpg",
  "image/suppl_5-1.jpg",
  "image/suppl_5-2.jpg",
  "image/suppl_6-1.jpg",
  "image/suppl_6-2.jpg",
];

const slider = document.getElementById("imageSlider");

imagePaths.forEach(path => {
  const wrapper = document.createElement("div");
  wrapper.className = "flex-shrink-0 snap-center flex justify-center items-center w-full";

  const img = document.createElement("img");
  img.src = path;
  img.alt = "補鐵圖示";
  img.className = "w-[360px] object-contain rounded-lg shadow-lg";

  wrapper.appendChild(img);
  slider.appendChild(wrapper);
});
