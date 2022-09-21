const onClickRow = (number) => {
  const reset = () => {
    document.querySelector(".row1").classList.add("hidden");
    document.querySelector(".row2").classList.add("hidden");
    document.querySelector(".row3").classList.add("hidden");
    document.querySelector(".r-content1").classList.add("hidden");
    document.querySelector(".r-content2").classList.add("hidden");
    document.querySelector(".r-content3").classList.add("hidden");
    document.querySelector(".wrapper").classList.add("closeRadius");
    document.querySelector(".wrapper").classList.remove("openRadius");
  };
  switch (number) {
    case 1:
      if (
        document.querySelector(".row1").classList[2] === "hidden" ||
        document.querySelector(".r-content1").classList[2] === "hidden"
      ) {
        reset();
        document.querySelector(".row1").classList.remove("hidden");
        document.querySelector(".r-content1").classList.remove("hidden");
        document.querySelector(".wrapper").classList.remove("closeRadius");
        return;
      }
      reset();
      return;
    case 2:
      if (
        document.querySelector(".row2").classList[2] === "hidden" ||
        document.querySelector(".r-content2").classList[2] === "hidden"
      ) {
        reset();
        document.querySelector(".row2").classList.remove("hidden");
        document.querySelector(".r-content2").classList.remove("hidden");
        document.querySelector(".wrapper").classList.remove("closeRadius");
        return;
      }
      reset();
      return;
    case 3:
      if (
        document.querySelector(".row3").classList[2] === "hidden" ||
        document.querySelector(".r-content3").classList[2] === "hidden"
      ) {
        reset();
        document.querySelector(".row3").classList.remove("hidden");
        document.querySelector(".r-content3").classList.remove("hidden");
        document.querySelector(".wrapper").classList.remove("closeRadius");
        return;
      }
      reset();
      return;
    default:
      return;
  }
};

const onClickSpRow = (number) => {
  const reset = () => {
    document.querySelector(".r-contentSp1").classList.add("hidden");
    document.querySelector(".r-contentSp2").classList.add("hidden");
    document.querySelector(".r-contentSp3").classList.add("hidden");
    document.querySelector(".wrapperSp").classList.add("closeRadius");
    document.querySelector(".wrapperSp").classList.remove("openRadius");
  };
  switch (number) {
    case 1:
      if (document.querySelector(".r-contentSp1").classList[1] === "hidden") {
        reset();
        document.querySelector(".r-contentSp1").classList.remove("hidden");
        document.querySelector(".wrapperSp").classList.remove("closeRadius");
        return;
      }
      reset();
      return;
    case 2:
      if (document.querySelector(".r-contentSp2").classList[1] === "hidden") {
        reset();
        document.querySelector(".r-contentSp2").classList.remove("hidden");
        document.querySelector(".wrapperSp").classList.remove("closeRadius");
        return;
      }
      reset();
      return;
    case 3:
      if (document.querySelector(".r-contentSp3").classList[1] === "hidden") {
        reset();
        document.querySelector(".r-contentSp3").classList.remove("hidden");
        document.querySelector(".wrapperSp").classList.remove("closeRadius");
        return;
      }
      reset();
      return;
    default:
      return;
  }
};
