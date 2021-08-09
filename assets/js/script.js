(() => {
  let yOffset = 0;
  const w = innerWidth;
  const h = innerHeight;
  let basePoint;

  const sectionInfo = [
    {
      // home
      objs: {
        container: document.querySelector("#home"),
        visual: document.querySelector(".visual"),
        canvas: document.querySelector("#canvas"),
        context: canvas.getContext("2d"),
        words: document.querySelectorAll("#home .word"),
        word1: document.querySelector("#home .word1"),
        word2: document.querySelector("#home .word2"),
        word3: document.querySelector("#home .word3"),
      },
    },
    {
      // about
      objs: {
        container: document.querySelector("#about"),
        arrows: document.querySelectorAll("#about .arrow"),
        arrow1: document.querySelector("#about .arrow1"),
        arrow2: document.querySelector("#about .arrow2"),
        arrow3: document.querySelector("#about .arrow3"),

        item1: document.querySelector("#about .item1"),
        item2: document.querySelector("#about .item2"),
        item3: document.querySelector("#about .item3"),
      },
    },
    {
      // works
      objs: {
        container: document.querySelector("#works"),
        copy: document.querySelector("#works .copy"),
        title: document.querySelector("#works .title"),
        titleDraw: document.querySelector("#works .draw"),
        item1: document.querySelector("#works .item1"),
        item2: document.querySelector("#works .item2"),
        item3: document.querySelector("#works .item3"),
        item4: document.querySelector("#works .item4"),
      },
    },
    {
      // hiring
      objs: {
        container: document.querySelector("#hiring"),
        title: document.querySelector("#hiring .title"),
        item1: document.querySelector("#hiring .item1"),
        item2: document.querySelector("#hiring .item2"),
        item3: document.querySelector("#hiring .item3"),
        item4: document.querySelector("#hiring .item4"),
        item5: document.querySelector("#hiring .item5"),
      },
    },
    {
      // contact
      objs: {
        container: document.querySelector("#contact"),
      },
    },
  ];

  function setCanvasDraw() {}

  function setLayout() {
    for (let i; i < sectionInfo.length; i++) {
      sectionInfo[i].scrollHeight =
        sectionInfo[i].heightNum * window.innerHeight;
      sectionInfo[
        i
      ].objs.container.style.height = `${sectionInfo[i].scrollHeight}px`;
    }

    function animate() {
      // home
      if (yOffset + h > sectionInfo[0].objs.word1.offsetTop - h) {
        sectionInfo[0].objs.words.forEach((word, i) => {
          setTimeout(function () {
            word.classList.add("on");
          }, 100 * (i + 1));
        });
      }

      // about
      if (0 > sectionInfo[1].objs.item1.getBoundingClientRect().top - h) {
        sectionInfo[1].objs.arrows.forEach((item) => {
          item.classList.remove("on");
        });
        sectionInfo[1].objs.arrow1.classList.add("on");
      }
      if (0 > sectionInfo[1].objs.item2.getBoundingClientRect().top - h) {
        sectionInfo[1].objs.arrows.forEach((item) => {
          item.classList.remove("on");
        });
        sectionInfo[1].objs.arrow2.classList.add("on");
      }
      if (0 > sectionInfo[1].objs.item3.getBoundingClientRect().top - h) {
        sectionInfo[1].objs.arrows.forEach((item) => {
          item.classList.remove("on");
        });
        sectionInfo[1].objs.arrow3.classList.add("on");
      }

      // works
      let worksValue =
        1 -
        (sectionInfo[2].objs.title.getBoundingClientRect().top - h / 2) /
          (h / 2);
      if (worksValue > 1) {
        worksValue = 1;
      } else if (worksValue < 0) {
        worksValue = 0;
      }

      if (0 > sectionInfo[2].objs.copy.getBoundingClientRect().top - h) {
        sectionInfo[2].objs.copy.style.transform = `translateY(${
          70 - worksValue * 70
        }px)`;
        sectionInfo[2].objs.title.style.opacity = worksValue;

        // sectionInfo[2].objs.title.style.opacity = worksValue;
        // sectionInfo[2].objs.title.style.transform = `translate3d(0,${
        //   100 - worksValue * 100
        // },0)`;
        console.log(100 - worksValue * 100);
      }
      if (0 > sectionInfo[2].objs.titleDraw.getBoundingClientRect().top - h) {
        sectionInfo[2].objs.titleDraw.classList.add("on");
      }

      // hiring
      if (0 > sectionInfo[3].objs.item1.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.item1.classList.add("on");
      }
      if (0 > sectionInfo[3].objs.item2.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.item2.classList.add("on");
      }
      if (0 > sectionInfo[3].objs.item3.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.item3.classList.add("on");
      }
      if (0 > sectionInfo[3].objs.item4.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.item4.classList.add("on");
      }
      if (0 > sectionInfo[3].objs.item5.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.item5.classList.add("on");
      }
    }

    window.addEventListener("resize", setLayout);

    window.addEventListener("scroll", () => {
      yOffset = window.pageYOffset;
      basePoint = yOffset + h / 2;
      console.log("yOffset", yOffset);
      // console.log("basePoint", basePoint);
      animate();
    });
  }

  window.addEventListener("load", () => {
    document.body.classList.remove("before-load");
    setLayout();
    sectionInfo[0].objs.context.fillStyle = "#B9FF7D";
    sectionInfo[0].objs.context.fillRect(0, 0, w, h);

    console.log(sectionInfo[1].objs.item1.getBoundingClientRect().top);
    console.log(sectionInfo[1].objs.item2.getBoundingClientRect().top);
    console.log(sectionInfo[2].objs.titleDraw.getBoundingClientRect().top);
  });
})();
