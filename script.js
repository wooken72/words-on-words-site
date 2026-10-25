// If a local image in images/ is missing, fall back to the official App Store copy.
const STORE = "https://is1-ssl.mzstatic.com/image/thumb/";
const FALLBACKS = {
  1: "Purple122/v4/10/14/20/101420f1-bd8a-eff7-7ead-668cec05582a/d1040acc-ff74-4b4b-bcbd-b42cd923aeb3_1.png/784x1392bb.png",
  2: "Purple112/v4/e1/3e/28/e13e28be-d2d5-38a6-0b9e-1c99a2f5875d/c3cef7cc-87ec-466e-b6f4-576dc0b49ad0_2.png/784x1392bb.png",
  3: "Purple122/v4/64/e1/67/64e1671a-0de0-6630-4bc3-1bb25799668e/96d7a141-c22f-4196-9eb9-bb344c778a3c_3.png/784x1392bb.png",
  4: "Purple112/v4/ba/7a/cf/ba7acf26-2697-c0a6-e379-1a25e9b7b292/c1e5ff0f-302f-47f5-8cec-f4363c5c1912_4.png/784x1392bb.png",
  5: "Purple112/v4/44/56/ed/4456ed4c-b640-1353-fcff-da5626a9ee48/acbe9b7e-43cb-40a0-8a7a-2e0c0107e711_5.png/784x1392bb.png",
  icon: "Purple211/v4/c3/03/53/c3035342-74fd-f007-e30f-80fa882ed080/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg",
};

document.querySelectorAll("img[data-fallback]").forEach((img) => {
  const swap = () => {
    if (img.dataset.swapped) return;
    img.dataset.swapped = "1";
    img.src = STORE + FALLBACKS[img.dataset.fallback];
  };
  img.addEventListener("error", swap);
  if (img.complete && img.naturalWidth === 0) swap();
});

document.getElementById("year").textContent = new Date().getFullYear();
