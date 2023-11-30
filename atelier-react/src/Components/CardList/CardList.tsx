import { Card, Image } from 'semantic-ui-react'
import './CardList.scss'

interface CardListProps {
  apiResult : CardProps[]
}

interface CardProps {
owner:{
	html_url : string,
	avatar_url : string,
	login : string,
},
name : string,
description : string,
}

const CardList = ({apiResult} : CardListProps) => {

  return (
    <div className="card-container">
			{apiResult.map((card : CardProps) => (
			<Card>		
			        <a className='card-img-link' href={card.owner.html_url}>
								<Image className='card-img' src={card.owner.avatar_url} alt='avatar-image' />
							</a> 
							<Card.Content>
			        	<Card.Header>{card.name}</Card.Header>
			        	<Card.Meta>{card.owner.login}</Card.Meta>
			        	<Card.Description className='card-description'>{card.description}</Card.Description>
							</Card.Content>
			
		</Card>))} 
		</div>	
  );
};

export default CardList;