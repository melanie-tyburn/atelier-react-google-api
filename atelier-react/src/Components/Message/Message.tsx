import './Message.scss'
import { Message } from 'semantic-ui-react';

interface MessageProps {
    numberResults: number;
}


const Messages = ({numberResults}: MessageProps) => {
  console.log(numberResults);
  return(
    <div className="message-container">
  <Message>
    <p>
    La recherche a donné {numberResults} résultas.
    </p>
  </Message>
  </div>
  )
}


export default Messages