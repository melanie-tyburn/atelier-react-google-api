import './Messages.scss'
import { Message } from 'semantic-ui-react';

interface MessageProps {
    numberResults: number;
}
const Messages = ({numberResults} : MessageProps) => {
  return(
  <Message>
    <p>
    La recherche a donné {numberResults} résultats.
    </p>
  </Message>
  )
}


export default Messages