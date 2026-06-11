const TextCardTransparent = ({text, isActive = false}) => {
    return (
        <div className={`h-fit w-fit rounded-xl border p-2 text-sm hover:border-primary/40
         ${isActive ? "border-accent/20 bg-primary/20 text-foreground"  : "border-primary/20 text-muted-foreground"}`}>
            <p>{text}</p>
        </div>
    )
}

export default TextCardTransparent