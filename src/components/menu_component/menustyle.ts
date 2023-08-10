import ctl from "@netlify/classnames-template-literals";

export const menuStyle = ctl(`flex 
justify-between
z-10
 shadow-md
 m-0 
bg-white 
fixed
 top-0 
left-0
 right-0
 h-20
lg:pl-[152px]
lg:text-[24px]
`);

export const darkModeTextStyle = ctl(
    `mr-4
font-normal
text-[12px]
cursor-pointer
lg:pr-[140px]`
);

export const menuTextStyle = ctl(`font-bold`);
