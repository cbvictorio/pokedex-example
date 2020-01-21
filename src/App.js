import Button from 'Components/Button'
import Link from 'Components/Link'
import { Router } from '@reach/router'

const App = () => (
    <Router> 
        <Link path="/" />
        <Button path="/btn" />
    </Router>
)

export default App
