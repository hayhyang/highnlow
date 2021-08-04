(() => {
  let yOffset = 0;

  const sectionInfo = [
    {
      // 0
      type: "normal",
      heightNum: 0, // 브라우저 높이의 n배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#section0"),
      },
    },
    {
      // 1
      type: "normal",
      heightNum: 0, // 브라우저 높이의 n배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#section1"),
      },
    },
    {
      // 2
      type: "normal",
      heightNum: 0, // 브라우저 높이의 n배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#section2"),
      },
    },
    {
      // 3
      type: "normal",
      heightNum: 0, // 브라우저 높이의 n배로 scrollHeight 세팅
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
})();
