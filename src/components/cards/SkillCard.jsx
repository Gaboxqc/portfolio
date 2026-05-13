import Art from '../../assets/Art.svg'
import Code from '../../assets/Code.svg'
import Lightning from '../../assets/Lightning.svg'
import Rocket from '../../assets/Rocket.svg'

const SkillCard = ({Icon, Title, Description}) => {
    switch (Icon) {
        case 'Code': {
            Icon = Code
            break
        }
        case 'Art': {
            Icon = Art
            break
        }
        case 'Rocket': {
            Icon = Rocket
            break
        }
        case 'Lightning': {
            Icon = Lightning
            break
        }
        default: {
            Icon = Code
            break
        }

    }

    return(
        <div className={"max-w-100 bg-primary/20 flex flex-col gap-y-4 p-4 my-4 rounded-xl outline-1"}>
            <div className={"h-10 w-10 bg-primary/25 flex items-center justify-center rounded-xl outline-1"}>
                <img src={Icon} alt="Code"/>
            </div>
            <h2>{Title}</h2>
            <p className={"text-muted-foreground"}>{Description}</p>
        </div>
    )
}

export default SkillCard