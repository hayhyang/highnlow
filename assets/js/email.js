import { init, sendForm } from "@emailjs/browser";

init("init");

const form = document.getElementById("form");
const name = document.querySelector("#name");
const organization = document.querySelector("#organization");
const email = document.querySelector("#email");
const mobile = document.querySelector("#mobile");
const content = document.querySelector("#content");
const agree = document.querySelector("#agree");
const btn = document.getElementById("submit_button");

const checkMobileFormat = (e) => {
  const keyCode = e.keyCode;
  if (keyCode > 58 || keyCode < 47) e.preventDefault();
};

const sendEmail = (e) => {
  e.preventDefault();

  if (!agree.checked) {
    alert("개인정보 수집 이용 약관에 동의해주세요.");
    return;
  }

  btn.value = "Sending...";

  const templateID = "templateID";
  const serviceID = "serviceID";

  sendForm(serviceID, templateID, "#form").then(
    () => {
      btn.value = "문의 내용 전송하기";
      alert("이메일 전송이 완료되었습니다.");
      name.value = "";
      organization.value = "";
      email.value = "";
      mobile.value = "";
      content.value = "";
      agree.checked = false;
    },
    (err) => {
      btn.value = "문의 내용 전송하기";
      alert(JSON.stringify(err));
    }
  );
};

form.addEventListener("submit", sendEmail);
mobile.addEventListener("keypress", checkMobileFormat);
