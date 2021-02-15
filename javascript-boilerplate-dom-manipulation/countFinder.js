changeToDropdowns();

function changeToDropdowns(){
  var trows = document.getElementsByTagName("tr"); 
  
  // Repository Dropdown
  var repoDropdown = document.createElement('Select');
  repoDropdown.setAttribute("class","form-control");
  repoDropdown.setAttribute("id","countQueryRepositoryInput");
  repoValues =""
  for (i = 1; i < trows.length; i++) {
   let repo = trows[i].getElementsByTagName("th")[0].innerText ;
   repoValues += '<option value="'+ repo + '">'+ repo + '</option>' ;
  }
  repoDropdown.innerHTML = repoValues;
  var repoInput = document.getElementById("countQueryRepositoryInput");
  repoInput.replaceWith(repoDropdown);

  // Type Dropdown
  var typeDropdown = document.createElement('Select');
  typeDropdown.setAttribute("class","form-control");
  typeDropdown.setAttribute("id","countQueryIssueType");
  typeValues =""
  thdata = trows[0].getElementsByTagName("th");
  tharray = [...thdata];
  for (i = 1; i < tharray.length; i++) {
   let type = tharray[i].innerText ;
   typeValues += '<option value="'+ type + '">'+ type + '</option>' ;
  }
  typeDropdown.innerHTML = typeValues;
  var typeInput = document.getElementById("countQueryIssueType");
  typeInput.replaceWith(typeDropdown);
}

function countFinder(event) {  
  event.preventDefault();
  
  var reponame = document.getElementById("countQueryRepositoryInput").value;
  var issuetype = document.getElementById("countQueryIssueType").value;
  
  var table = document.getElementsByTagName("table"); 
  var trows = document.getElementsByTagName("tr"); 

  if(issuetype == 'total')
  pos = 0;
  else if(issuetype == 'open')
  pos = 1;
  else 
  pos = 2;

  for (i = 1; i < trows.length; i++) {
    thdata = trows[i].getElementsByTagName("th");
    tharray = [...thdata];
    thresult = tharray.filter((tds) => tds.innerText == reponame);
    if (thresult.length > 0) {
       var ans = trows[i].getElementsByTagName("td")[pos].innerText ;
    }
  }
  document.getElementById("count").innerText=ans;
}
