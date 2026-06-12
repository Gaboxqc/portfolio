const TextCardSlim = ({Text}) => {
    return(
        <div className={`bg-primary/10 rounded-xl text-center outline-1 text-sm p-2 w-fit text-muted-foreground`}>
            <span>{Text}</span>
        </div>
    )
}

export default TextCardSlim