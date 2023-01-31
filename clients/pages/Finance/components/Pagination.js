import React from 'react';
import './Pagination.scss';
import img1 from '../../../components/img/11.jpg';
import { NavLink } from 'react-router-dom';

export default function Pagination({ pages = 10, setCurrentPage }) {

  let activeStyle = {
    textDecoration: "none",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#0491FB",
    height: 47,
    display: "flex",
    alignItems: "center",
    width: 236,
    borderRadius: 10,
    paddingLeft: 13,
  };

  const numberOfPages = []
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i)
  }
  const [currentButton, setCurrentButton] = React.useState(1)
  const [arrOfCurrButtons, setArrOfCurrButtons] = React.useState([])

  React.useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons]
    let dotsInitial = '...'
    let dotsLeft = '... '
    let dotsRight = ' ...'

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5)
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)
      tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length])
    } else if (currentButton > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4)
      tempNumberOfPages = ([1, dotsLeft, ...sliced])
    } else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1)
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2)
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2)
    }

    setArrOfCurrButtons(tempNumberOfPages)
    setCurrentPage(currentButton)
  }, [currentButton])

  return (
    <div className="containerPagination">
      <NavLink
        className='prevLink'
        onClick={() => setCurrentButton(prev => prev <= 1 ? prev : prev - 1)}
      >
          <img 
          src='https://sun9-79.userapi.com/impg/nktbyqwdTfed8YmHT9qqea6zO_oeCiM19_6tDw/F8foXA0ivqM.jpg?size=60x58&quality=96&sign=9b217cc1e4e43e5ea559fa6f37b39964&type=album'
          style={{width: 30, height: 29, borderRadius: 6, marginTop: 20}}
          className='imgOne'
        />
      </NavLink>

      {arrOfCurrButtons.map(((item, index) => {
        return <NavLink
          key={index}
          className={'pageLink'}
          onClick={() => setCurrentButton(item)}
        >
          {item}
        </NavLink>
      }))}
      <NavLink
        className={'nextLink'}
        onClick={() => setCurrentButton(prev => prev >= numberOfPages.length ? prev : prev + 1)}
      >
        <img
          src='https://sun9-79.userapi.com/impg/nktbyqwdTfed8YmHT9qqea6zO_oeCiM19_6tDw/F8foXA0ivqM.jpg?size=60x58&quality=96&sign=9b217cc1e4e43e5ea559fa6f37b39964&type=album'
          style={{width: 30, height: 29, borderRadius: 6, marginTop: 20}}
        />
      </NavLink>
    </div>
  )
}
