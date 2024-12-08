const applyButtonRing = document.getElementById("apply-ring");
const previewImageRing = document.getElementById("preview-ring-image");

const ringImages = {
  Gold: "asset/image/cincin-gold.png",
  Putih: "asset/image/cincin-putih.png",
  "Rose Gold": "asset/image/cincin-rosegold.png",
};

applyButtonRing.addEventListener("click", function () {
  const selectedColorRing = document.querySelector('input[name="color-ring"]:checked').value;
  if (selectedColorRing && ringImages[selectedColorRing]) {
    previewImageRing.src = ringImages[selectedColorRing];
    previewImageRing.classList.remove("hidden");
    previewImageRing.classList.add("show");
  }
});

const applyButtonNecklace = document.getElementById("apply-necklace");
const previewImageNecklace = document.getElementById("preview-necklace-image");

const necklaceImages = {
  Gold: "asset/image/kalung-gold.png",
  Putih: "asset/image/kalung-putih.png",
  "Rose Gold": "asset/image/kalung-rosegold.png",
};

applyButtonNecklace.addEventListener("click", function () {
  const selectedColorNecklace = document.querySelector('input[name="color-necklace"]:checked').value;
  if (selectedColorNecklace && necklaceImages[selectedColorNecklace]) {
    previewImageNecklace.src = necklaceImages[selectedColorNecklace];
    previewImageNecklace.classList.remove("hidden");
    previewImageNecklace.classList.add("show");
  }
});

const applyButtonBracelet = document.getElementById("apply-bracelet");
const previewImageBracelet = document.getElementById("preview-bracelet-image");

const braceletImages = {
  Gold: "asset/image/gelang-gold.png",
  Putih: "asset/image/gelang-putih.png",
  "Rose Gold": "asset/image/gelang-rosegold.png",
};

applyButtonBracelet.addEventListener("click", function () {
  const selectedColorBracelet = document.querySelector('input[name="color-bracelet"]:checked').value;
  if (selectedColorBracelet && braceletImages[selectedColorBracelet]) {
    previewImageBracelet.src = braceletImages[selectedColorBracelet];
    previewImageBracelet.classList.remove("hidden");
    previewImageBracelet.classList.add("show");
  }
});

document.getElementById("send-button").addEventListener("click", function () {
  const userInput = document.getElementById("customize-textbox").value;

  if (userInput.trim() !== "") {
    document.getElementById("success-message").style.display = "block";
  } else {
    alert("Please enter your customization request.");
  }
});
