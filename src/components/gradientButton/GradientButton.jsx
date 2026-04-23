const GradientButton = ({label}) => {
    return(
        <button className={"h-13 w-auto px-6 rounded-lg bg-linear-to-r from-primary to-accent text-white"}>{label}</button>
    )
}

export default GradientButton