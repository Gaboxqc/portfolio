const TextCardSm = ({Text}) => {
    return(
        <div className={`bg-primary/20 rounded-xl text-center outline-1 text-sm p-2 w-fit`}>
            <span>{Text}</span>
        </div>
    )
}

export default TextCardSm