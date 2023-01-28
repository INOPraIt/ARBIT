import React from 'react'
import CardsEducation from './CardsEducation';
import './CardsEducation.scss';

export default function CardsEducationContainer() {

  const [secretItem, setSecretItem] = React.useState(true);

  let cardsEducationArr = [
    {
      id: 1,
      header: 'Как будет проходить обучение?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In platea sodales scelerisque nunc, a venenatis cursus. Id magna aliquam at posuere gravida semper vestibulum et iaculis. Sociis adipiscing mi donec egestas. Tortor praesent amet cras cras nunc consequat.',
      secretItem: false
    },
    {
      id: 2,
      header: 'Как будет проходить обучение?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In platea sodales scelerisque nunc, a venenatis cursus. Id magna aliquam at posuere gravida semper vestibulum et iaculis. Sociis adipiscing mi donec egestas. Tortor praesent amet cras cras nunc consequat.',
      secretItem: false
    },
    {
      id: 3,
      header: 'Как будет проходить обучение?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In platea sodales scelerisque nunc, a venenatis cursus. Id magna aliquam at posuere gravida semper vestibulum et iaculis. Sociis adipiscing mi donec egestas. Tortor praesent amet cras cras nunc consequat.',
      secretItem: false
    },
    {
      id: 4,
      header: 'Как будет проходить обучение?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In platea sodales scelerisque nunc, a venenatis cursus. Id magna aliquam at posuere gravida semper vestibulum et iaculis. Sociis adipiscing mi donec egestas. Tortor praesent amet cras cras nunc consequat.',
      secretItem: true
    }
  ]

  return (
    <div className='cardsEducationContainer'>
      {cardsEducationArr.map(s =>
        <CardsEducation
          key={s.id}
          header={s.header}
          description={s.description}
          secretItem={s.secretItem}
        />
      )}
    </div>
  )
}
