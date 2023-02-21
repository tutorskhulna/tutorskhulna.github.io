// Get the cart element
const cart = document.getElementById('cart');

// Load the teachers data from the JSON file
fetch('coaching.json')
  .then(response => response.json())
  .then(data => {
    // Loop through each teacher and create a card for them
    data.forEach(teacher => {
      // Create a new card element
      const card = document.createElement('div');
      card.classList.add('teacher-card');

      // Add the teacher's image to the card


      // Add the teacher's name to the card

      const name = document.createElement('h1');
      name.textContent = teacher.name;
      card.appendChild(name);



      // Add the teacher's qualification to the card
      const qualification = document.createElement('h2');
      qualification.textContent = teacher.qualification;
      card.appendChild(qualification);

      // Add the teacher's subject to the card
      const subjecttext = document.createElement('h4');
      subjecttext.textContent = '#Subject: ';
      card.appendChild(subjecttext);

      const subject = document.createElement('p');
      subject.textContent = teacher.subject;
      card.appendChild(subject);

      // Add the teacher's subject to the card
      const placetext = document.createElement('h4');
      placetext.textContent = '#Tutors location: ';
      card.appendChild(placetext);


      const place = document.createElement('p');
      place.textContent = teacher.place;
      card.appendChild(place);

      // Add the teacher's subject to the card

      const salarytext = document.createElement('h4');
      salarytext.textContent = '#Expected salary /12 days: ';
      card.appendChild(salarytext);

      const salary = document.createElement('p');
      salary.textContent = teacher.salary;
      card.appendChild(salary);



      const phonetext = document.createElement('h4');
      phonetext.textContent = '#Phone no: ';
      card.appendChild(phonetext);

      const phone = document.createElement('p');
      phone.textContent = teacher.phone;
      card.appendChild(phone);

      // Add a clickable link to the teacher's Facebook profile to the card
      const fb = document.createElement('a');
      fb.href = teacher.fb;
      fb.textContent = 'Tutors Facebook Id Link';
      fb.target = '_blank'; // Open the link in a new tab
      const facebookId = document.createElement('p');
      facebookId.textContent = '';
      facebookId.appendChild(fb);
      card.appendChild(facebookId);

      // Add a button to add the teacher to the cart
      const point = document.createElement('h3');
      point.textContent = 'Satisfactory Point: ' + teacher.point;
      card.appendChild(point);

      // Add the card to the teachers list
      const teachersList = document.getElementById('teachers-list');
      teachersList.appendChild(card);
    });
  });
