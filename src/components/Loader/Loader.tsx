import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import parag from '../../assets/paragraph.png'

const LoaderExampleText = () => (
    <div>
        <Segment>
            <Loader active />

            <Image src={parag} />
        </Segment>

    </div>
)

export default LoaderExampleText