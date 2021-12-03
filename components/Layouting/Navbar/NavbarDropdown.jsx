import React from 'react'

export default function NavbarDropdown(props)
{
    return (
        <div className={props.dropdownHeightClass + " bg-black origin-top md:hidden h-screen opacity-90 w-full grid place-items-center duration-500 fixed top-0 left-0 z-10"}>
            { props.children }
        </div>
    )
}