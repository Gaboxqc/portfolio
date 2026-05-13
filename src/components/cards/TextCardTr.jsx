const TextCardTr = ({text}) => {
    return (
        <div className={"border w-fit h-fit text-muted-foreground text-sm p-2 rounded-xl hover:border-primary/40"}>
            <p>{text}</p>
        </div>
    )
}

export default TextCardTr