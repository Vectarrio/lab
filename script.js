"use strict";
fetch('db/skills.json')
  .then(data => data.json())
  .then(json => { 
  	listskills(json); 
  })
  .catch(() => console.error("упс, что-то пошло не так"));
const list = document.querySelector(".skills-list");
function listskills(skills) {
skills.forEach((skill) =>{
    const listitem = document.createElement('dt');
    const listdesc = document.createElement('dd');
    const skilllevel = document.createElement('div');
    listitem.textContent = skill.name;
	listitem.classList.add(skill.class);
    skilllevel.style.width=`${skill.value}%`;
    skilllevel.textContent = `${skill.value}%`;
	listdesc.classList.add("level");
    listdesc.append(skilllevel);
    list.append(listitem);
    list.append(listdesc);
});
}