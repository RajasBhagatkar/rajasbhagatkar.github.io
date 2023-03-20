const email_input = document.querySelector("#email_id");
// alert(email_input.target.value);

email_input.addEventListener("change", (e) => {
  alert(e.target.value);
});

const mail_sneder = document.querySelector('.form')

mail_sneder.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Response");
  console.log(e.target.value);
  alert('Your response have Reached Sucessfully!!!')
})
