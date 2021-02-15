var row = 1;
function AddRow(){
    var dataArray = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
        dataArray.push(checkboxes[i].value);
    }
    name = document.getElementById('userNameInput').value;
    email = document.getElementById('userEmailInput').value;
    website = document.getElementById('userWebsiteInput').value;
    imageLink = document.getElementById('userImageInput').value;
    gender = document.querySelector('input[name="gender"]:checked').value;
    skills = dataArray;
    var display = document.getElementById('show');
    var newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = "<strong>" + name + "</strong>" + "<br/>" + gender + "<br/>" + email + "<br/>" + "<a href = \"" + website + "\" target=\"_blank\">" + website + "</a><br/>" + skills;
    cell2.innerHTML = "<img src = \"" + imageLink + "\" alt=\"Image not Found\" width=\"100\" height=\"120\">"
    row++;
    document.forms[0].reset();
};
