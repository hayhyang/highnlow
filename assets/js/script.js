(() => {
  let yOffset = 0;
  const w = innerWidth;
  const h = innerHeight;

  const sectionInfo = [
    {
      // 0
      type: "normal",
      heightNum: 0,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#home"),
        visual: document.querySelector(".visual"),
        canvas: document.querySelector("#canvas"),
        context: canvas.getContext("2d"),
      },
    },
    {
      // 1
      type: "normal",
      heightNum: 0,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#section1"),
      },
    },
    {
      // 2
      type: "normal",
      heightNum: 0,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#section2"),
      },
    },
    {
      // 3
      type: "normal",
      heightNum: 0,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#section3"),
      },
    },
  ];

  function setLayout() {
    for (let i; i < sectionInfo.length; i++) {
      sectionInfo[i].scrollHeight =
        sectionInfo[i].heightNum * window.innerHeight;
      sectionInfo[
        i
      ].objs.container.style.height = `${sectionInfo[i].scrollHeight}px`;
    }

    function scrollLoop() {}

    window.addEventListener("resize", setLayout);

    window.addEventListener("scroll", () => {
      yOffset = window.pageYOffset;
      scrollLoop();
    });
  }

  window.addEventListener("load", () => {
    document.body.classList.remove("before-load");
    setLayout();
    sectionInfo[0].objs.context.fillStyle = "#B9FF7D";
    sectionInfo[0].objs.context.fillRect(0, 0, w, h);
  });
})();
