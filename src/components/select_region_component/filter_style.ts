import ctl from "@netlify/classnames-template-literals";

export const filterStyle = ctl(`flex
 flex-row 
place-items-center 
justify-between 
 shadow-md
 rounded-md 
bg-white 
h-16 
p-4 
ml-4 
mr-32
cursor-pointer
relative
fixed`);

export const dropDownListStyle = ctl(` flex-row 
justify-start 
place-items-center 
 shadow-md
 rounded-md 
bg-white 
h-16 
w-[215px]
h-[250px]
px-4
py-6
ml-4 
mr-32
mt-2
z-10
cursor-pointer
absolute`);
