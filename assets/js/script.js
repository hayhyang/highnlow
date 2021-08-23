(() => {
  let yOffset = 0;
  const w = innerWidth;
  const h = innerHeight;
  let basePoint;
  let getStyle = getComputedStyle(document.documentElement);
  let gradientProgress = -10.4652;
  let gradientProgress2 = 89.5348;
  let gradientAngle = getStyle.getPropertyValue("$gradientAngle");

  const sectionInfo = [
    {
      // home
      objs: {
        container: document.querySelector("#home"),
        visual: document.querySelector(".visual"),
        // canvas: document.querySelector("#canvas"),
        // context: canvas.getContext("2d"),
        title: document.querySelector("#home .title"),
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
        title: document.querySelector("#works .copy > .title"),
        titleDraw: document.querySelector("#works .draw"),
        items: document.querySelectorAll("#works .item"),
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
        title: document.querySelector("#hiring > .title"),
        items: document.querySelectorAll("#hiring .item"),
        item1: document.querySelector("#hiring .item1"),
        item2: document.querySelector("#hiring .item2"),
        item3: document.querySelector("#hiring .item3"),
        item4: document.querySelector("#hiring .item4"),
        item5: document.querySelector("#hiring .item5"),
        descs: document.querySelectorAll("#hiring .desc"),
        desc1: document.querySelector("#hiring .item1 .desc"),
        desc2: document.querySelector("#hiring .item2 .desc"),
        desc3: document.querySelector("#hiring .item3 .desc"),
        desc4: document.querySelector("#hiring .item4 .desc"),
        desc5: document.querySelector("#hiring .item5 .desc"),
      },
    },
    {
      // contact
      objs: {
        container: document.querySelector("#contact"),
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

    function animate() {
      // home
      let homeTitleValue =
        (h - sectionInfo[0].objs.title.getBoundingClientRect().top) / (h / 2);
      if (yOffset + h > sectionInfo[0].objs.word1.offsetTop - h) {
        sectionInfo[0].objs.words.forEach((word, i) => {
          setTimeout(function () {
            word.classList.add("on");
          }, 100 * (i + 1));
        });
      }

      if (0 > sectionInfo[0].objs.title.getBoundingClientRect().top) {
        let titleOpacityValue =
          1 +
          sectionInfo[0].objs.title.getBoundingClientRect().top /
            sectionInfo[0].objs.title.getBoundingClientRect().height;
        sectionInfo[0].objs.title.style.opacity = titleOpacityValue;
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
      let worksTitleValue =
        (h - sectionInfo[2].objs.title.getBoundingClientRect().bottom) /
        (h / 2);

      if (0 > sectionInfo[2].objs.copy.getBoundingClientRect().top - h) {
        // sectionInfo[2].objs.copy.style.transform = `translateY(${
        //   70 - worksTitleValue * 70
        // }px)`;
        sectionInfo[2].objs.copy.style.opacity = worksTitleValue;
      }
      if (
        0 >
        sectionInfo[2].objs.titleDraw.getBoundingClientRect().top - h * 0.6
      ) {
        sectionInfo[2].objs.titleDraw.classList.add("on");
      }

      if (worksTitleValue > 1) {
        worksTitleValue = 1;
      } else if (worksTitleValue < 0) {
        worksTitleValue = 0;
      }

      if (0 > sectionInfo[2].objs.copy.getBoundingClientRect().top) {
        let copyOpacityValue =
          1 +
          sectionInfo[2].objs.copy.getBoundingClientRect().top /
            sectionInfo[2].objs.copy.getBoundingClientRect().height;
        sectionInfo[2].objs.copy.style.opacity = copyOpacityValue;
      }

      let worksItem1Value =
        (h - sectionInfo[2].objs.item1.getBoundingClientRect().top) / (h / 2);
      let worksItem2Value =
        (h - sectionInfo[2].objs.item2.getBoundingClientRect().top) / (h / 2);
      let worksItem3Value =
        (h - sectionInfo[2].objs.item3.getBoundingClientRect().top) / (h / 2);
      let worksItem4Value =
        (h - sectionInfo[2].objs.item4.getBoundingClientRect().top) / (h / 2);

      if (0 > sectionInfo[2].objs.item1.getBoundingClientRect().top - h) {
        sectionInfo[2].objs.item1.style.cssText = `
          opacity: ${worksItem1Value * 2};
          transform: translate3d(0,${worksItem1Value * 140}px,0);
        `;
        sectionInfo[2].objs.item1.style.opacity = worksItem1Value * 2;
      }
      if (0 > sectionInfo[2].objs.item2.getBoundingClientRect().top - h) {
        sectionInfo[2].objs.item2.style.cssText = `
          opacity: ${worksItem2Value * 2};
          transform: translate3d(0,${worksItem2Value * 160}px,0);
        `;
      }
      if (0 > sectionInfo[2].objs.item3.getBoundingClientRect().top - h) {
        sectionInfo[2].objs.item3.style.cssText = `
          opacity: ${worksItem3Value * 2};
          transform: translate3d(0,${worksItem3Value * 80}px,0);
        `;
      }
      if (0 > sectionInfo[2].objs.item4.getBoundingClientRect().top - h) {
        sectionInfo[2].objs.item4.style.cssText = `
          opacity: ${worksItem4Value * 2};
          // transform: translate3d(0,${worksItem4Value * 100}px,0);
        `;
      }

      // hiring
      let hiringTitleValue =
        (h - sectionInfo[3].objs.title.getBoundingClientRect().top) / (h / 2);

      if (0 > sectionInfo[3].objs.title.getBoundingClientRect().top - h) {
        console.log(-100 + hiringTitleValue * 100, hiringTitleValue * 100);
        sectionInfo[3].objs.title.style.cssText = `background-image: linear-gradient(
            135deg, rgba(0, 0, 0, 1) ${
              -100 + hiringTitleValue * 100
            }%, rgba(0, 0, 0, 0) ${hiringTitleValue * 100}%
        );`;
      }

      let hiringDesc1Value =
        (h - sectionInfo[3].objs.desc1.getBoundingClientRect().top) / (h / 2);
      let hiringDesc2Value =
        (h - sectionInfo[3].objs.desc2.getBoundingClientRect().top) / (h / 2);
      let hiringDesc3Value =
        (h - sectionInfo[3].objs.desc3.getBoundingClientRect().top) / (h / 2);
      let hiringDesc4Value =
        (h - sectionInfo[3].objs.desc4.getBoundingClientRect().top) / (h / 2);
      let hiringDesc5Value =
        (h - sectionInfo[3].objs.desc5.getBoundingClientRect().top) / (h / 2);

      if (0 > sectionInfo[3].objs.item1.getBoundingClientRect().bottom - h) {
        sectionInfo[3].objs.item1.classList.add("on");
      }
      if (0 > sectionInfo[3].objs.item2.getBoundingClientRect().bottom - h) {
        sectionInfo[3].objs.item2.classList.add("on");
      }
      if (0 > sectionInfo[3].objs.item3.getBoundingClientRect().bottom - h) {
        sectionInfo[3].objs.item3.classList.add("on");
      }
      if (0 > sectionInfo[3].objs.item4.getBoundingClientRect().bottom - h) {
        sectionInfo[3].objs.item4.classList.add("on");
      }
      if (0 > sectionInfo[3].objs.item5.getBoundingClientRect().bottom - h) {
        sectionInfo[3].objs.item5.classList.add("on");
      }

      if (0 > sectionInfo[3].objs.desc1.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.desc1.style.cssText = `background-image: linear-gradient(
            135deg, rgba(0, 0, 0, 1) ${
              -100 + hiringDesc1Value * 100
            }%, rgba(0, 0, 0, 0) ${hiringDesc1Value * 100}%
        );`;
      }
      if (0 > sectionInfo[3].objs.desc2.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.desc2.style.cssText = `background-image: linear-gradient(
            135deg, rgba(0, 0, 0, 1) ${
              -100 + hiringDesc2Value * 100
            }%, rgba(0, 0, 0, 0) ${hiringDesc2Value * 100}%
        );`;
      }
      if (0 > sectionInfo[3].objs.desc3.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.desc3.style.cssText = `background-image: linear-gradient(
            135deg, rgba(0, 0, 0, 1) ${
              -100 + hiringDesc3Value * 100
            }%, rgba(0, 0, 0, 0) ${hiringDesc3Value * 100}%
        );`;
      }
      if (0 > sectionInfo[3].objs.desc4.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.desc4.style.cssText = `background-image: linear-gradient(
            135deg, rgba(0, 0, 0, 1) ${
              -100 + hiringDesc4Value * 100
            }%, rgba(0, 0, 0, 0) ${hiringDesc4Value * 100}%
        );`;
      }
      if (0 > sectionInfo[3].objs.desc5.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.desc5.style.cssText = `background-image: linear-gradient(
            135deg, rgba(0, 0, 0, 1) ${
              -100 + hiringDesc5Value * 100
            }%, rgba(0, 0, 0, 0) ${hiringDesc5Value * 100}%
        );`;
      }
    }

    window.addEventListener("resize", setLayout);

    window.addEventListener("scroll", () => {
      yOffset = window.pageYOffset;
      basePoint = yOffset + h / 2;
      // console.log("yOffset", yOffset);
      // console.log("yOffset + h", yOffset + h);
      animate();
    });
  }

  window.addEventListener("load", () => {
    document.body.classList.remove("before-load");
    setLayout();
    sectionInfo[0].objs.visual.classList.add("on");
    // sectionInfo[0].objs.context.fillStyle = "#B9FF7D";
    // sectionInfo[0].objs.context.fillRect(0, 0, w, h);
  });
})();
