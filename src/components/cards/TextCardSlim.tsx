interface TextCardSlimProps {
  Text: string
}

const TextCardSlim = ({ Text }: TextCardSlimProps) => {
  return (
    <div
      className={`w-fit rounded-xl bg-primary/10 p-2 text-center text-sm text-muted-foreground outline-1`}
    >
      <span>{Text}</span>
    </div>
  )
}

export default TextCardSlim
