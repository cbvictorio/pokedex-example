import pokemonLogo from '@/assets/pokeapi_256.png'
import { 
    Container,
    Title,
    Logo,
    Description,
    Link
} from './styles'


const NotFound = () => (
    <Container>
        <Logo src={pokemonLogo} />
        <Title> Oops!  </Title>
        <Description> This project doesn't have any url specified, but you can go to the main screen! :) </Description>
        <Link to="/"> Go back </Link>
    </Container>
)

export default NotFound
