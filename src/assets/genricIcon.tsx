import Svg, { Circle, Ellipse, G, Mask, Path, Rect } from "react-native-svg"

export const CustomCheckbox = (props:any)=>{
    return <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<Rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="#E0EAFF"/>
<Rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke={props.border??"#3538CD"}/>
<Path d="M14.6667 6.5L8.25004 12.9167L5.33337 10" stroke={props.check??"#3538CD"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
}

export const Profile = (props:any)=>{
    return <Svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
<Circle cx="28.5" cy="28" r="28" fill="#EAECF0"/>
<Mask id="mask0_4067_68" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="57" height="56">
<Circle cx="28.5" cy="28" r="28" fill="#C4C4C4"/>
</Mask>
<G mask="url(#mask0_4067_68)">
<Ellipse cx="28.5" cy="47.8" rx="21.2" ry="11.8" fill="#A9B5F8"/>
<Ellipse cx="28.5" cy="22.8" rx="10" ry="10" fill="#A9B5F8"/>
</G>
</Svg>
}

export const Plus = (prosp:any)=>{
    return <Svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
<Path d="M12.7614 26.5V0.136362H14.2159V26.5H12.7614ZM0.306818 14.0455V12.5909H26.6705V14.0455H0.306818Z" fill="#667085"/>
</Svg>
}