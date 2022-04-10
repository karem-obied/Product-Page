let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
plus.onclick = () => {
  plus.previousElementSibling.innerHTML++;
};
minus.onclick = () => {
  if (minus.nextElementSibling.innerHTML > 0)
    minus.nextElementSibling.innerHTML--;
};
let near = document.querySelector(".cart");
let q = document.querySelector(".shop");
near.onclick = () => {
  if (q.classList.contains("closed")) {
    q.style.display = "block";
    q.classList.remove("closed");
  } else {
    q.classList.add("closed");
    q.style.display = "none";
  }
};
let close = document.querySelector(".close");
let clickable = document.querySelector(".clickable");
let clickable2 = document.querySelector(".clickable,.clickable2");
close.onclick = () => {
  clickable.style.display = "none";
  clickable2.style.display = "none";
};
let big = document.querySelector(".images .big");
big.onclick = () => {
  clickable.style.display = "block";
  clickable2.style.display = "block";
};
let divs = document.querySelectorAll(".small div");
let divs2 = document.querySelectorAll(".small2 div");
divs.forEach((el) => {
  el.onclick = () => {
    divs.forEach((a) => {
      a.classList.remove("active");
    });
    el.classList.add("active");
    let str = el.innerHTML;
    console.log(str);
    big.innerHTML =
      str.slice(0, str.indexOf("thumbnail") - 1) +
      str.slice(str.indexOf("thumbnail") + 9);
  };
});
divs2.forEach((el) => {
  el.onclick = () => {
    divs2.forEach((a) => {
      a.classList.remove("active2");
    });
    el.classList.add("active2");
    let str = el.innerHTML;
    console.log(str);
    innrbig.innerHTML =
      str.slice(0, str.indexOf("thumbnail") - 1) +
      str.slice(str.indexOf("thumbnail") + 9);
  };
});
let next = document.querySelector(".next");
let pre = document.querySelector(".previous");
let counter = 1;
let innrbig = document.querySelector(".big2");
innrbig.innerHTML = `<img src="/images/image-product-${counter}.jpg" alt="" />`;
next.onclick = () => {
  if (counter <= 4) {
    counter++;
    innrbig.innerHTML = `<img src="/images/image-product-${counter}.jpg" alt="" />`;
  }
};
pre.onclick = () => {
  if (counter > 0) {
    counter--;
    innrbig.innerHTML = `<img src="/images/image-product-${counter}.jpg" alt="" />`;
  }
};
let shop = document.querySelector(".btn");
let cart = document.querySelector(".flex");
let a = document.createElement("div");
let b = document.createElement("div");
let f = document.createElement("div");
let c = document.createElement("span");
let e = document.createElement("span");
let d = document.createElement("h5");
let photo = document.createElement("img");
photo.setAttribute("src", "/images/image-product-1-thumbnail.jpg");
photo.className = "newp";
let p = document.querySelector(".flex p");
let button = document.createElement("button");
d.innerHTML = "Fall Limited Edition Sneakers";
button.className = "new";
button.innerText = "CheckOut";
shop.onclick = () => {
  if (+plus.previousElementSibling.innerHTML > 0) {
    e.innerHTML = `${+plus.previousElementSibling.innerHTML * 125}`;
    c.innerHTML = `$125 *${+plus.previousElementSibling.innerHTML}`;
    f.appendChild(photo);
    b.appendChild(d);
    b.appendChild(c);
    b.appendChild(e);
    f.appendChild(b);
    a.appendChild(f);
    a.appendChild(button);
    f.className = "f";
    b.className = "b";
    c.className = "c";
    e.className = "e";
    a.className = "a";
    cart.append(a);
    let span = document.createElement("span");
    span.classList.add("span1");
    span.innerHTML = minus.nextElementSibling.innerHTML;
    near.appendChild(span);
    p.style.display = "none";
  }
};
let openul = document.querySelector(".hi");
let ul = document.querySelector("header nav ul");
openul.onclick = () => {
  ul.classList.add("show");
  let clone = close.cloneNode(true);
  ul.append(clone);
  clone.style.cssText = "position:absolute;top:10px;left:10px";
  clone.onclick = () => {
    ul.classList.remove("show");
    clone.remove();
  };
};
let attr = document.querySelector(".attribution");
let html = attr.innerHTML;
attr.innerHTML = "INFO";
attr.onclick = () => {
  attr.innerHTML = html;
};
attr.onmouseleave = () => {
  attr.innerHTML = "INFO";
};
