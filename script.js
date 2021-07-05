"use strict";
let myskills = [
    {name: 'HTML', value: 60, class: "skill-html"},
    {name: 'CSS', value: 40, class: "skill-css"},
    {name: 'C', value: 75, class: "skill-c"},
    {name: 'Java', value: 50, class: "skill-java"},
    {name: 'Assembler (x86/64)', value: 30, class: "skill-asm"}
];
let list = document.querySelector(".skills-list");
myskills.forEach((skill) =>{
    var listitem = document.createElement('dt');
    var listdesc = document.createElement('dd');
    var skilllevel = document.createElement('div');
    listitem.appendChild(document.createTextNode(skill.name));
	listitem.classList.add(skill.class);
    skilllevel.style.width=`${skill.value}%`;
    skilllevel.appendChild(document.createTextNode(`${skill.value}%`));
	listdesc.classList.add("level");
    listdesc.appendChild(skilllevel);
    list.appendChild(listitem);
    list.appendChild(listdesc);
});