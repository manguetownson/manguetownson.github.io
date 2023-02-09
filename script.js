const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
Parse.serverURL = 'https://parseapi.back4app.com/'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'FWbnpad0uBl2uPdIuNVGnIYKgzYUO17HJ5xcG1B2', // This is your Application ID
  '6u0GWjoe6lSp6m6HLeuPS45mowb7zJp9Fl75hKiF' // This is your Javascript key
);


const skills_data = Parse.Object.extend("skills_data");

const List = document.getElementById('soft-skills');

const readSkills = async () => {
  const queryList = new Parse.Query(skills_data);

    try {
      const result = await queryList.find();
      List.innerHTML = "";

      for (const resultado of result) {

        const res = resultado.get("skill")
        List.innerHTML += "<li>" + res + '';
      }
    } catch(error){
      console.error("Error while fetching itens", error)
    }
}

readSkills();