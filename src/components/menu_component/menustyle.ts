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
 right-0 h-20`);

export const darkModeTextStyle = ctl(
    `mr-4 font-normal text-[12px] cursor-pointer`
);

export const menuTextStyle = ctl(`font-bold`);
