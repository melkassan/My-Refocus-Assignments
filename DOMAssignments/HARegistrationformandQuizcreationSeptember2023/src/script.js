let regionArr = [
  'Region I Ilocos Region',
  'Region II Cagayan Valley',
  'Region III Central Luzon',
  'Region IV‑A CALABARZON',
  'MIMAROPA Region',
  'Region V Bicol Region',
  'Region VI Western Visayas',
  'Region VII Central Visayas',
  'Region VIII Eastern Visayas',
  'Region IX Zamboanga Peninsula',
  'Region X Northern Mindanao',
  'Region XI Davao Region',
  'Region XII SOCCSKSARGEN',
  'Region XIII Caraga',
  'NCR National Capital Region',
  'CAR Cordillera Administrative Region',
  'BARMM Bangsamoro Autonomous Region in Muslim Mindanao',
];
let vaccArr = [
  'Pfizer-BioNTech',
  'AstraZeneca',
  'Coronavac',
  'Sputnik V',
  'Janssen',
  'Covaxin',
  'Moderna',
  'Sinopharm',
  'Covovax',
];
//variables input text and radio
const fname = document.querySelector('#fname');
const mname = document.querySelector('#mname');
const lname = document.querySelector('#lname');
const gender = document.getElementsByName('gender');
const bday = document.querySelector('#bday');
const email = document.querySelector('#email');
const province = document.querySelector('#province');
const barangay = document.querySelector('#barangay');
const street = document.querySelector('#street');
const ddate = document.querySelector('#ddate');
const dsite = document.querySelector('#dsite');
const confirm = document.getElementsByName('confirm');
const ddate1 = document.querySelector('#ddate1');
const dsite1 = document.querySelector('#dsite1');
const questions = document.querySelectorAll('.questions');
// form variable
const form = document.forms.quiz;
// get the values of each form here

//drop down variables
const region = document.querySelector('#region');
const vaccine = document.querySelector('#vaccine');
const vaccine2 = document.querySelector('#vaccine2');
//question variables
const question1 = document.querySelector('#question1');
const question2 = document.getElementsByName('question2');
const question3 = document.getElementsByName('question3');

//display dropdown for region
for (let i of regionArr) {
  let drop = document.createElement('option');
  drop.text = i;
  region.appendChild(drop);
}

//display dropdown for vaccine brand
for (let i of vaccArr) {
  let vac = document.createElement('option');
  //vac.value = i;
  vac.text = i;
  vaccine.appendChild(vac);
}

//display dropdown for vaccine brand 2
for (let i of vaccArr) {
  let vac = document.createElement('option');
  vac.text = i;
  vaccine2.appendChild(vac);
}

//event listeners
vaccine.addEventListener('change', function (e) {
  //console.log(e.target.value);
  const theOb = document.querySelectorAll('#vaccine2 option');
  theOb.forEach(function (i) {
    if (e.target.value == i.text) {
      i.selected = true;
    } else {
      i.disabled = true;
    }
  });
});
let confirmValidate = 0;
confirm.forEach(element => {
  const lconfirm = 'Has 2nd Dose:';
  element.addEventListener('change', e => {
    if (e.target.value == 'yes') {
      confirmValidate = 1;
      questions.forEach(e => {
        e.setAttribute('style', 'display:block  !important;');
      });
      document.getElementById(
        'ans-confirm'
      ).innerHTML = `${lconfirm} ${e.target.value}`;
    } else if (e.target.value == 'no' || confirmValidate == 0) {
      confirmValidate = 2;
      questions.forEach(e => {
        e.setAttribute('style', 'display:none  !important;');
        // to edit July 17, 2023 - i cannot submit the questions with validations
      });
      document.getElementById(
        'ans-confirm'
      ).innerHTML = `${lconfirm} ${e.target.value}`;
    }
  });
});

/* const allText = document.querySelectorAll('input[type=text]'); */
form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (confirmValidate == 1) {
    if (validateForm1()) {
      document.getElementById('result-subReset').innerHTML =
        '❌Please review required fields';
    } else {
      document.getElementById('result-subReset').innerHTML = '';
      document.getElementById('Success-subReset').innerHTML = '✔Successful';
    }
  } else if (confirmValidate == 0 || confirmValidate == 2) {
    if (validateForm2()) {
      document.getElementById('result-subReset').innerHTML =
        '❌Please review required fields';
    } else {
      document.getElementById('result-subReset').innerHTML = '';
      document.getElementById('Success-subReset').innerHTML = '✔Successful';
    }
  }
});

validateForm1 = () => {
  let status = false;
  let arrValidate = [
    validateFirstName(),
    validateMiddleName(),
    validateLastName(),
    validateGender(),
    validateBirthday(),
    validateEmail(),
    validateRegion(),
    validateProvince(),
    validateBarangay(),
    validateStreet(),
    validateVaccine(),
    validateVaccine2(),
    validateDdate(),
    validateDdate2(),
    validateDSite(),
    validateDSite2(),
    validateConfirm(),
    checkQuestion1(),
    checkQuestion2(),
    checkQuestion3(),
  ];
  let value;
  var cntFields;
  for (const theConfirm of confirm) {
    if (theConfirm.checked) {
      value = theConfirm.value;
    }
  }

  if (value === 'yes') {
    cntFields = arrValidate.length;
    for (let i = 0; i <= cntFields; i++) {
      if (arrValidate[i] === false) {
        status = true;
        break;
      }
    }
  }

  return status;
};
validateForm2 = () => {
  let status = false;
  let arrValidate = [
    validateFirstName(),
    validateMiddleName(),
    validateLastName(),
    validateGender(),
    validateBirthday(),
    validateEmail(),
    validateRegion(),
    validateProvince(),
    validateBarangay(),
    validateStreet(),
    validateVaccine(),
    validateVaccine2(),
    validateDdate(),
    validateDdate2(),
    validateDSite(),
    validateDSite2(),
    validateConfirm(),
  ];
  let value;
  var cntFields;
  for (const theConfirm of confirm) {
    if (theConfirm.checked) {
      value = theConfirm.value;
    }
  }

  if (value === undefined || value === 'no') {
    cntFields = arrValidate.length;
    for (let i = 0; i <= cntFields; i++) {
      if (arrValidate[i] === false) {
        status = true;
        break;
      }
    }
  }
  return status;
};
//for Reset
form.addEventListener('reset', function () {
  document.getElementById('quiz-form').reset();
});

//text, radio, check boxes, dropdown function validations
validateFirstName = () => {
  const label = document.querySelector('#result-fname');
  let status;
  if (fname.value == '') {
    label.innerHTML = `First name is empty.`;
    status = false;
  } else {
    label.innerHTML = ``;
    status = true;
  }
  return status;
};
validateMiddleName = () => {
  const label = document.querySelector('#result-mname');
  let status;
  if (mname.value == '') {
    label.innerHTML = `Middle name is empty.`;
    status = false;
  } else {
    label.innerHTML = ``;
    status = true;
  }
  return status;
};
validateLastName = () => {
  const label = document.querySelector('#result-lname');
  let status;
  if (lname.value == '') {
    label.innerHTML = `Middle name is empty.`;
    status = false;
  } else {
    label.innerHTML = ``;
    status = true;
  }
  return status;
};
validateGender = () => {
  const label = document.querySelector('#result-gender');
  let status = false;
  for (const theGender of gender) {
    if (theGender.checked) {
      status = true;
    }
  }
  if (!status) {
    label.innerHTML = `Select Gender.`;
  } else {
    label.innerHTML = ``;
  }
  return status;
};
validateBirthday = () => {
  const label = document.querySelector('#result-bday');
  let status;
  if (bday.value == '') {
    label.innerHTML = `Birthdate is empty.`;
    status = false;
  } else {
    label.innerHTML = ``;
    status = true;
  }
  return status;
};
validateEmail = () => {
  const label = document.querySelector('#result-email');
  let status;
  if (email.value == '') {
    label.innerHTML = `Email is empty.`;
    status = false;
  } else {
    label.innerHTML = ``;
    status = true;
  }
  return status;
};
validateRegion = () => {
  const label = document.querySelector('#result-region');
  let status = false;
  for (const theRegion of region) {
    if (theRegion.selected && theRegion.value != '') {
      status = true;
    }
  }
  if (!status) {
    label.innerHTML = `Select Region`;
  } else {
    label.innerHTML = ``;
  }
  return status;
};
validateProvince = () => {
  const label = document.querySelector('#result-province');
  let status;
  if (province.value == '') {
    label.innerHTML = `Province is empty`;
    status = false;
  } else {
    label.innerHTML = ``;
    status = true;
  }
  return status;
};
validateBarangay = () => {
  const label = document.querySelector('#result-barangay');
  let status;
  if (province.value == '') {
    label.innerHTML = `Barangay is empty`;
    status = false;
  } else {
    label.innerHTML = ``;
    status = true;
  }
  return status;
};
validateStreet = () => {
  const label = document.querySelector('#result-street');
  let status;
  if (province.value == '') {
    label.innerHTML = `Street is empty`;
    status = false;
  } else {
    label.innerHTML = ``;
    status = true;
  }
  return status;
};
validateVaccine = () => {
  const label = document.querySelector('#result-vaccine');
  let status = false;
  for (const theVaccine of vaccine) {
    if (theVaccine.selected && theVaccine.value != '') {
      status = true;
    }
  }
  if (!status) {
    label.innerHTML = `Select Vaccine`;
  } else {
    label.innerHTML = ``;
  }
  return status;
};
validateVaccine2 = () => {
  const label = document.querySelector('#result-vaccine2');
  let status = false;
  for (const theVaccine of vaccine2) {
    if (theVaccine.selected && theVaccine.value != '') {
      status = true;
    }
  }
  if (!status) {
    label.innerHTML = `Select Vaccine`;
  } else {
    label.innerHTML = ``;
  }
  return status;
};
validateDdate = () => {
  const label = document.querySelector('#result-ddate');
  let status;
  if (ddate.value == '') {
    label.innerHTML = `Dose date 1 is empty.`;
    status = false;
  } else {
    label.innerHTML = ``;
    status = true;
  }
  return status;
};
validateDdate2 = () => {
  const label = document.querySelector('#result-ddate1');
  let status;
  if (ddate1.value == '') {
    label.innerHTML = `Dose date 2 is empty.`;
    status = false;
  } else {
    label.innerHTML = ``;
    status = true;
  }
  return status;
};
validateDSite = () => {
  const label = document.querySelector('#result-dsite');
  let status;
  if (dsite.value == '') {
    label.innerHTML = `Dose site address is empty.`;
    status = false;
  } else {
    label.innerHTML = ``;
    status = true;
  }
  return status;
};
validateDSite2 = () => {
  const label = document.querySelector('#result-dsite1');
  let status;
  if (dsite1.value == '') {
    label.innerHTML = `Dose site address is empty.`;
    status = false;
  } else {
    label.innerHTML = ``;
    status = true;
  }
  return status;
};
validateConfirm = () => {
  const label = document.querySelector('#result-confirm');
  let status = false;
  for (const theConfirm of confirm) {
    if (theConfirm.checked) {
      status = true;
      break;
    }
  }
  if (!status) {
    label.innerHTML = `Please select answer.`;
  } else {
    label.innerHTML = ``;
  }
  return status;
};
function checkQuestion1() {
  const answer = question1.value;
  let status = false;
  if (question1.value == '') {
    document.getElementById('result-question1').innerHTML =
      'You must enter an answer!';
  } else if (answer.toLowerCase() == 'manila') {
    status = true;
    document.getElementById('result-question1').innerHTML = '';
    document.getElementById('Success-question1').innerHTML =
      'Question 1 answer is correct!';
  } else {
    document.getElementById('result-question1').innerHTML =
      'You got the wrong answer. ';
  }
  return status;
}

function checkQuestion2() {
  let flag = false;
  let status = false;
  const x = 3 + 2 * 5;
  let theAnswer;
  const dQuestion2 = document.querySelectorAll('.question2');
  for (const thequestion of dQuestion2) {
    if (thequestion.checked) {
      theAnswer = thequestion.value * 1;
      flag = true;
    }
  }
  if (flag && theAnswer == x) {
    status = true;
    document.getElementById('result-question2').innerHTML = '';
    document.getElementById('Success-question2').innerHTML =
      'Question 2 answer is correct!!';
  } else if (flag && theAnswer != x) {
    document.getElementById('result-question2').innerHTML =
      'You got the wrong answer.';
  } else {
    document.getElementById('result-question2').innerHTML =
      'You must enter an answer!';
  }
  return status;
}

function checkQuestion3() {
  let status = false;
  const answerKey = ['parrot', 'eagle', 'crow'];
  let theAnswer = [];
  const dQuestion3 = document.querySelectorAll('.question3');
  for (const thequestion of dQuestion3) {
    if (thequestion.checked) {
      theAnswer.push(thequestion.value.toLowerCase());
    }
  }
  if (theAnswer.length == 3) {
    var cntRight = 0;
    for (let i = 0; i < theAnswer.length; i++) {
      for (let j = 0; j < answerKey.length; j++) {
        if (theAnswer[i] == answerKey[j]) {
          cntRight++;
        }
      }
    }
    if (cntRight == 3) {
      status = true;
      document.getElementById('result-question3').innerHTML = '';
      document.getElementById('Success-question3').innerHTML =
        'Question 3 answer is correct!';
    } else {
      document.getElementById('result-question3').innerHTML =
        'You chosen the wrong three answers.';
    }
  } else {
    document.getElementById('result-question3').innerHTML =
      'You must enter 3 answers!';
  }
  return status;
}

display_fname = () => {
  const fname = document.getElementById('fname');
  const lfname = document.getElementById('lfname').innerText;
  document.getElementById('ans-fname').innerHTML = `${lfname} ${fname.value}`;
};
display_mname = () => {
  const mname = document.getElementById('mname');
  const lmname = document.getElementById('lmname').innerText;
  document.getElementById('ans-mname').innerHTML = `${lmname} ${mname.value}`;
};
display_lname = () => {
  const lname = document.getElementById('lname');
  const llname = document.getElementById('llname').innerText;
  document.getElementById('ans-lname').innerHTML = `${llname} ${lname.value}`;
};
bday.addEventListener('change', function (e) {
  const lbday = document.getElementById('lbday').innerText;
  document.getElementById('ans-bday').innerHTML = `${lbday} ${e.target.value}`;
});
gender.forEach(function (e) {
  const lgender = document.getElementById('lgender').innerText;
  e.addEventListener('click', function () {
    document.getElementById('ans-gender').innerHTML = `${lgender} ${e.value}`;
  });
});
display_email = () => {
  const email = document.getElementById('email');
  const lemail = document.getElementById('lemail').innerText;
  document.getElementById('ans-email').innerHTML = `${lemail} ${email.value}`;
};
region.addEventListener('change', function (e) {
  const lregion = document.getElementById('lregion').innerText;
  document.getElementById(
    'ans-region'
  ).innerHTML = `${lregion} ${e.target.value}`;
});
display_province = () => {
  const province = document.getElementById('province');
  const lprovince = document.getElementById('lprovince').innerText;
  document.getElementById(
    'ans-province'
  ).innerHTML = `${lprovince} ${province.value}`;
};
display_barangay = () => {
  const barangay = document.getElementById('barangay');
  const lbarangay = document.getElementById('lbarangay').innerText;
  document.getElementById(
    'ans-barangay'
  ).innerHTML = `${lbarangay} ${barangay.value}`;
};
display_street = () => {
  const street = document.getElementById('street');
  const lstreet = document.getElementById('lstreet').innerText;
  document.getElementById(
    'ans-street'
  ).innerHTML = `${lstreet} ${street.value}`;
};
vaccine.addEventListener('change', function (e) {
  const lvaccine = document.getElementById('lvaccine').innerText;
  document.getElementById(
    'ans-vaccine'
  ).innerHTML = `${lvaccine} ${e.target.value}`;
});
ddate.addEventListener('change', function (e) {
  const lddate = document.getElementById('lddate').innerText;
  document.getElementById(
    'ans-ddate'
  ).innerHTML = `${lddate} ${e.target.value}`;
});
display_dsite = () => {
  const dsite = document.getElementById('dsite');
  const ldsite = document.getElementById('ldsite').innerText;
  document.getElementById('ans-dsite').innerHTML = `${ldsite} ${dsite.value}`;
};
ddate1.addEventListener('change', function (e) {
  const lddate1 = document.getElementById('lddate1').innerText;
  document.getElementById(
    'ans-ddate1'
  ).innerHTML = `${lddate1} ${e.target.value}`;
});
display_dsite1 = () => {
  const dsite1 = document.getElementById('dsite1');
  const ldsite1 = document.getElementById('ldsite1').innerText;
  document.getElementById(
    'ans-dsite1'
  ).innerHTML = `${ldsite1} ${dsite1.value}`;
};

display_question1 = () => {
  const question1 = document.getElementById('question1');
  const lquestion1 = 'Question 1 answer: ';
  document.getElementById(
    'ans-question1'
  ).innerHTML = `${lquestion1} ${question1.value}`;
};

question2.forEach(function (e) {
  const lquestion2 = 'Question 2 answer: x = ';
  e.addEventListener('click', function (e) {
    document.getElementById(
      'ans-question2'
    ).innerHTML = `${lquestion2} ${e.target.value}`;
  });
});

question3.forEach(function (event) {
  event.addEventListener('click', function (event) {
    let answerArr = [];
    let theAnswers = '';
    question3.forEach(function (event) {
      if (event.checked === true) {
        answerArr.push(event.value);
      }
    });
    for (let i = 0; i < answerArr.length; i++) {
      theAnswers += `${i + 1}. ${answerArr[i]} <br/>`;
    }
    document.getElementById('ans-question3').innerHTML = 'Question 3 answers:<br/>'+theAnswers;
  });
});
