function createPieChart(containerId, data, labels, colors) {
  const container = document.getElementById(containerId);

  // Create canvas element
  const canvas = document.createElement("canvas");
  container.style.display = "flex";
  container.style.flexDirection = "row-reverse";
  container.style.justifyContent = "center";
  container.style.gap = "50px";
//   container.style.flexWrap = "wrap"
  container.style.alignItems = "center";
  canvas.width = 300; // Set canvas width
  canvas.height = 300; // Set canvas height
  container.appendChild(canvas);
  const popupStyle =
    "position: absolute;background-color: rgba(0, 0, 0, 0.7);color: white;padding: 5px;border-radius: 5px;z-index: 1001;display: none;";

  const ctx = canvas.getContext("2d");

  let sum = data.reduce((a, b) => a + b, 0);
  let AF = 360 / sum;
  let angle = 0;
  let angle1 = 0;

  // Add popup element
  const popup = document.querySelector(".popup");

  for (let i = 0; i < data.length; i++) {
    angle1 += (Math.PI / 180) * (data[i] * AF);

    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 100, angle, angle1);
    ctx.closePath();

    ctx.fillStyle = colors[i]; // Set fill color
    ctx.strokeStyle = "white"; // Set border color
    ctx.lineWidth = 1; // Set border width
    ctx.shadowColor = "rgba(0, 0, 0, 0.1)"; // Set shadow color
    ctx.shadowBlur = 0.5; // Set shadow blur

    ctx.fill();
    ctx.stroke();
    angle += (Math.PI / 180) * (data[i] * AF);
  }

  // Add hover effect
  canvas.addEventListener("mousemove", function (e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let currentAngle = 0;
    let hoveredIndex = null;
    for (let i = 0; i < data.length; i++) {
      let sliceAngle = (Math.PI / 180) * (data[i] * AF);

      ctx.beginPath();
      ctx.moveTo(150, 150);
      ctx.arc(150, 150, 100, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      let a = false;
      if (ctx.isPointInPath(x, y)) {
        a = true;
        hoveredIndex = i;
        //   New_chart(150, 150, 100, 120, a, ctx, data, AF, canvas);
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log("YES");
        ctx.fillStyle = rgba(colors[i % data.length], 0.01); // Set hover color
        let percent = (data[i] / sum) * 100;
        popup.setAttribute("style", popupStyle);
        popup.style.display = "block";
        popup.innerText = `${labels[i]} : ${percent.toFixed(2)}%`;
        popup.style.left = `${e.clientX - 100}px`; // Position popup relative to the mouse pointer
        popup.style.top = `${e.clientY - 50}px`;
        // ctx.arc(150, 150, 120, currentAngle, currentAngle + sliceAngle);
      } else {
        ctx.fillStyle = colors[i]; // Set original color
        a = false;
      }

      ctx.strokeStyle = "white"; // Set border color
      ctx.lineWidth = 1; // Set border width
      // ctx.shadowColor = 'rgba(155, 155, 155, 0.1)'; // Set shadow color
      // ctx.shadowBlur = 1; // Set shadow blur
      ctx.fill();
      ctx.stroke();

      currentAngle += sliceAngle;
    }
    New_chart(
      150,
      150,
      100,
      120,
      { index: hoveredIndex },
      ctx,
      data,
      AF,
      canvas,
      colors
    );
  });

  // Add legend
  document.querySelector(".colors").style.width = "5rem";
  for (let j = 0; j < data.length; j++) {
    const color = document.createElement("div");
    color.innerHTML = `
            <div style="width:100px; display: flex; justify-content:space-between;align-items: center;"><div>${labels[j]}</div><div style="width:10px; height:10px;background-color:${colors[j]};"></div></div>
            `;
    document.querySelector(".colors").appendChild(color);
    color.style.width = "100%";
    color.style.fontSize = "18px";
  }
}

function rgba(clr, alpha) {
  const tempElem = document.createElement("div");
  tempElem.style.color = clr;
  document.body.appendChild(tempElem);
  const computedStyle = getComputedStyle(tempElem);
  const color = computedStyle.color;
  document.body.removeChild(tempElem);
  const rgbValues = color.match(/\d+/g);
  const red = rgbValues[0];
  const green = rgbValues[1];
  const blue = rgbValues[2];
  return `rgb(${red},${green},${blue},${alpha})`;
}

function New_chart(sx, sy, r, r1, a, ctx, data, AF, canvas, colors) {
  // console.log("Hovered slice index:", a ? a.index : "None");
  let currentAngle = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < data.length; i++) {
    let sliceAngle = (Math.PI / 180) * (data[i] * AF);
    let rad = r;
    if (a && i === a.index) {
      console.log("WOWWW");
      rad = r1;
    }
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.arc(sx, sy, rad, currentAngle, currentAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = colors[i]; // Set fill color
    ctx.strokeStyle = "white"; // Set border color
    ctx.lineWidth = 1; // Set border width
    ctx.shadowColor = "rgba(0, 0, 0, 0.1)"; // Set shadow color
    ctx.shadowBlur = 0.5; // Set shadow blur
    ctx.fill();
    ctx.stroke();
    currentAngle += sliceAngle;
  }
}
