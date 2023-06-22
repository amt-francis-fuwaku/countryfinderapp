import ctl from "@netlify/classnames-template-literals";

export const menuStyle = ctl(`flex 
justify-between
 shadow-md
 m-0 
bg-white 
fixed top-0 
left-0
 right-0 h-20`);

export const darkModeTextStyle = ctl(`mr-4 font-normal text-[12px]`);

export const menuTextStyle = ctl(`text-[#111517] font-bold`);
