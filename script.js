
 const throttleFunction = (func, delay) => {
            let prev = 0;
            return (...args) => {
                let now = new Date().getTime();
                console.log(now - prev, delay);
                if (now - prev > delay) {
                    prev = now;
                    return func(...args);
                }
            }
        }

 document.querySelector("#center")
 .addEventListener("mousemove",throttleFunction((dets) => {
      //less repetative code here
     var div= document.createElement("div")
     div.classList.add("imagediv");
     div.style.left = dets.clientX + "px";
     div.style.top = dets.clientY + "px";


     var img=document.createElement("img");
     img.setAttribute("src", "https://images.hdqwalls.com/download/beautiful-girl-portrait-bn-1080x1920.jpg" );
        div.appendChild(img)  ;


     document.body.appendChild(div);


     gsap.to(img, {
        y:"0%",
        ease:Power3,
        duration:.6,
     })
     
     gsap.to(img, {
        y:"100%",
        delay:.7,
        ease:Power3,
     })

     setTimeout(() => {
        div.remove();
     }, 900);

  }, 100));








 



