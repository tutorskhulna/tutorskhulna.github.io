
fetch("class68.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (class68) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let tutor of class68) {
            out += `
    <hr>

    <div class="cards">
      
  
      <div class="cards-box">
        <h1 class="cards-title">${tutor.name}</h1>
        <h3 class="cards-title" style="color:blue;font-size:18px;">${tutor.qualification}</h3>
       <br>
        <div class="cards-content">
         <h3>Want to teach:<br>${tutor.subject}</h3>
            <h3>Tutor's Location:<br> ${tutor.place}</h3>
            <h3>Expected salary/12 days:<br> ${tutor.salary}</h3>
            <h3>Phone: ${tutor.phone}</h3>
            </div>
      </div>
  
      <div class="cards-footer">
        
        <a href="${tutor.fb}">facebook id link</a>
        <a href="${tutor.email}">Email</a>
        <hr>
      <hr>
      <h2 class="point">Satisfactory Point: ${tutor.point}</h2>
      </div>
      
    </div>
 




`;
        }

        placeholder.innerHTML = out;
    });