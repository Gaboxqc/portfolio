const GradientButton = (props) => {
    return(
        <button className={"h-13 w-auto px-6 rounded-lg bg-linear-to-r from-[#5B8DEF] to-[#00D4FF] text-white"}>{props.label}</button>
    )
}

export default GradientButton