// Select Li for Colors
colorsLi = document.querySelectorAll(".colors-list li");
// Start Setting Box
let mainColors = localStorage.getItem("color_option");

let logo = document.querySelector(".logo");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);
  // Reomv Class Active For Element
  colorsLi.forEach((li) => {
    li.classList.remove("active");
    // Cheack li data Set For LI === Main Color On LocalStorage
    if (li.dataset.color === mainColors) {
      // Add Class Active For Element
      li.classList.add("active");
    }
  });
}

// sellect setting box Elemint
let settingBox = document.querySelector(".settings-box");

let iconeSetting = document.querySelector(".icone");
console.log(logo);

iconeSetting.onclick = function () {
  settingBox.classList.toggle("open");
  // Sellect Over Lay Element To Chiking Setting Box
  let overLay = document.querySelector(".overlay");
  // If Condation For Setting Box Of Classes  Contant on "open"
  if (settingBox.classList[1] === "open") {
    overLay.onclick = () => {
      settingBox.classList.remove("open");
      logo.classList.remove("hidden");
    };
  }

  logo.classList.toggle("hidden");
};

colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Reomv Class Active For Element
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color,
    );
    localStorage.setItem("color_option", e.target.dataset.color);
  });
});
handeleActive(colorsLi);
// End Setting Box

// Select Landing Page Elemnt
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imge
let imgeArray = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

// Change imge Timeing
setInterval(() => {
  // Change Background Imges Url
  let randomNymber = Math.floor(Math.random() * imgeArray.length);
  //   console.log(randomNymber)
  landingPage.style.backgroundImage = `url('../imges/image-${randomNymber}.jpg')`;
}, 7000);

// Start Galery
let ourGalery = document.querySelectorAll(".galery img");

ourGalery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Creat OVer Lay TO pupop
    let overLAy = document.createElement("div");

    // Add The Clas Name On Over lay
    overLAy.className = "popup-overlay";

    // Add The Over Lay on The Body
    document.body.appendChild(overLAy);

    // Creat Div To Add in Img
    let pupopBox = document.createElement("div");

    // Add THe Clas Name ON THe div
    pupopBox.className = "pupop-box";

    // Creat The Img
    let pupopImg = document.createElement("img");
    // Set Image Sours
    pupopImg.src = img.src;
    // Add THe Img In Div
    pupopBox.appendChild(pupopImg);
    // Add THe Div  In THe Body
    document.body.appendChild(pupopBox);
    // Creat Elemnt Cloesd THe Popup
    let closePupop = document.createElement("span");
    // Add THe Button Close X
    closePupop.innerHTML = "X";
    // Add The Class Name ON The Spab
    closePupop.className = "close-button";
    // Add The Buton In THe Pupop Box
    pupopBox.appendChild(closePupop);
  });
});
document.addEventListener("click", (e) => {
  if (
    e.target.className == "close-button" ||
    e.target.className == "popup-overlay"
  ) {
    document.querySelector(".popup-overlay").remove();
    document.querySelector(".pupop-box").remove();
  }
});
// End Galery

// Start Nav Bullets

// Sellect All bullts
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
let allLinks = document.querySelectorAll(".header-area li a");
let footLinks = document.querySelectorAll(".footer .links a");

function goAnyWhere(Element) {
  Element.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault(); // يمنع القفز الافتراضي للرابط
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
goAnyWhere(allBullets);
goAnyWhere(allLinks);
goAnyWhere(footLinks);
// End Nav Bullets

// Hamdle Activ State

function handeleActive(ev) {
  ev.forEach((li) => {
    li.addEventListener("click", (e) => {
      // Reomv Class Active For Element
      ev.forEach((li) => {
        li.classList.remove("active");
      });

      // Add Class Active For Element
      e.target.classList.add("active");
    });
  });
}

// Select Icone Par
let iconePar = document.querySelector(".header-area .icone");
// Select My List
let ulList = document.querySelector(".header-area ul");
// Selct Arrow

iconePar.addEventListener("click", () => {
  iconePar.classList.toggle("menu");
  ulList.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (ulList.classList == "open") {
    if (e.target.className == "overlay") {
      ulList.classList.remove("open");
      iconePar.classList.remove("menu");
    }
  }
});
// Start Contact Us
function sendEmail(e) {
  e.preventDefault();
  const form = document.getElementById("contactForm");
  const loader = document.getElementById("conter");
  const btn = document.getElementById("submit");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorName = document
    .querySelector("#name")
    .parentElement.querySelector(".error span");
  const errorGmail = document
    .querySelector("#email")
    .parentElement.querySelector(".error span");
  const errorPhone = document
    .querySelector("#phone")
    .parentElement.querySelector(".error span");
  const errorMessage = document
    .querySelector("#message ")
    .parentElement.querySelector(".error span");

  if (name.value === "" || name.value.trim().length > 15) {
    console.log(name.value.trim().length);
    errorName.innerHTML = "Enter Your Name";
    name.classList.add("errorfiled");
  } else {
    name.classList.remove("errorfiled");
    errorName.innerHTML = "";
  }
  // 0000000000000
  if (email.value === "" || !emailRegex.test(email.value.trim())) {
    email.classList.add("errorfiled");
    errorGmail.innerHTML = "Enter Your Real Gmail ";
  } else {
    email.classList.remove("errorfiled");
    errorGmail.innerHTML = "";
  }
  // 000000000000000
  if (phone.value === "" || phone.value.trim().length !== 11) {
    phone.classList.add("errorfiled");
    console.log(errorPhone);
    errorPhone.innerHTML = "Enter Your Real Number ";
  } else {
    console.log(phone.value.length);
    phone.classList.remove("errorfiled");
    errorPhone.innerHTML = "";
  }
  // 0000000000000
  if (message.value === "") {
    message.classList.add("errorfiled");
    errorMessage.innerHTML = "Enter Your Message !! ";
  } else {
    message.classList.remove("errorfiled");
    errorMessage.innerHTML = "";
  }
  if (
    name.value !== "" &&
    email.value !== "" &&
    emailRegex.test(email.value.trim()) &&
    phone.value !== "" &&
    phone.value.trim().length === 11 &&
    message.value !== ""
  ) {
    loader.style.display = "block";
    btn.disabled = true;
    const data = {
      toEmail: "rouleclinic@gmail.com",
      fromeEmail: "rouleclinic@gmail.com",
      subject: "Support",
      message: `
          name: ${name.value.trim()}
          fromEmail : ${email.value.trim()}
          phone : ${phone.value.trim()}
          message : ${message.value.trim()}
          `,
    };
    console.log(data);

    emailjs
      .send("service_sijd0x7", "template_filfllg", data)
      .then((response) => {
        setTimeout(() => {
          loader.style.display = "none";
          btn.disabled = false;
          btn.innerHTML = "Submit";
          pupopmessage("Message Sent Success ✅", "h2");
          form.reset();
        }, 1000);
      })

      .catch((error) => {
        setTimeout(() => {
          loader.style.display = "none";
          btn.disabled = false;
          btn.innerHTML = "Submit";
          pupopmessage("فشل الأتصال حاول مرة أخري", "h1");
          form.reset();
        }, 1000);
      });
  }
  // تشغيل اللودر
  //   btn.innerHTML = "Sending...";
}
document.getElementById("submit").addEventListener("click", sendEmail);

function pupopmessage(mes, ele) {
  // Creat OVer Lay TO pupop
  let center = document.createElement("div");

  // Add The Clas Name On Over lay
  center.className = "center";
  
  center.style.display = "block";
  // Add The Over Lay on The Body
  document.body.appendChild(center);

  // Creat Div To Add in Img
  let conte = document.createElement("div");

  // Add THe Clas Name ON THe div
  conte.className = "contee";

  // Creat H1 ele
  let message = document.createElement(ele);

  message.innerHTML = mes;

  conte.appendChild(message);

  center.appendChild(conte);
  setTimeout(() => {
    center.style.display = "none";
  }, 1000);
}
