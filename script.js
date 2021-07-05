"use strict";
const myskills = [
    {name: 'HTML', value: 60, class: "skill-html"},
    {name: 'CSS', value: 40, class: "skill-css"},
    {name: 'C', value: 75, class: "skill-c"},
    {name: 'Java', value: 50, class: "skill-java"},
    {name: 'Assembler (x86/64)', value: 30, class: "skill-asm"}
];
const list = document.querySelector(".skills-list");
myskills.forEach((skill) =>{
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