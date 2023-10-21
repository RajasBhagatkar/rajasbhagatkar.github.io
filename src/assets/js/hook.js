const contactForm = document.querySelector(".form");
const btn = document.querySelector(".send_msg")

contactForm.addEventListener("submit", async(e) => {
    try{
        e.preventDefault();

        var formData = new FormData(contactForm);
        // output as an object
        formData = Object.fromEntries(formData);

        
        let validEmail = await fetch(
            "https://api.cloudmersive.com/validate/email/address/full",
            {
              method: "POST",
              body: formData.email,
              headers: {
                "Content-Type": "application/json",
                apiKey: "fd71482b-4b36-4d7d-925c-4a81f7aaee75"
              }
            }
          );
        validEmail = await validEmail.json();
        
        if(!validEmail.ValidAddress){
            alert("Please Enter Valid Email")
            return;
        }

     



      
        // var formData = new FormData(contactForm);
        // // output as an object
        // formData = Object.fromEntries(formData);
        
        const response = await fetch("https://eo6znp9j22ckalj.m.pipedream.net", {
            method: "POST",
            body: JSON.stringify(formData)
        })

        contactForm.reset();
        btn.innerText="Thank You!"
        setTimeout(()=> {
            btn.innerHTML="Send"
        },5000)

    }catch(error) {
        console.log('error found')
        // another hook if error found in those case
        console.log(error)
    }


})

