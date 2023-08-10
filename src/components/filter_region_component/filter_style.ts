import ctl from "@netlify/classnames-template-literals";

export const filterStyle = ctl(`flex
 flex-row 
place-items-center 
justify-between 
 shadow-md
 rounded-md 
bg-white 
w-[215px]
p-4 
ml-4 
-mt-4
mr-32
cursor-pointer
fixed
lg:right-24
lg:top-24
lg:mt-2
lg:mr-[3.30%]`);

export const dropDownListStyle = ctl(` flex-row 
place-items-center 
 shadow-md
 rounded-md 
bg-white 
w-[215px]
h-[250px]
px-4
py-0
ml-4 
mr-32
mt-14
z-10
cursor-pointer
fixed
lg:right-24
lg:top-24
lg:mt-[70px]
lg:mr-32
lg:mr-48
lg:mr-[3.30%]`);
