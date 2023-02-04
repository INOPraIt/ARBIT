import React from 'react'
import Sidebar from '../Rates/Components/Sidebar/Sidebar';
import './Finance.scss';
import Select from 'react-select';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';

const options = [
  { value: 'Bitcoin', label: 'Bitcoin' },
  { value: 'Ethereum', label: 'Ethereum' },
]

export default function Finance() {
  const [currentReplenish, setCurrentReplenish] = React.useState('Bitcoin');
  const [currentConclusion, setCurrentConclusion] = React.useState('Bitcoin');
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length / postsPerPage);

  React.useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, []);

  if (loading && posts.length === 0) {
    return <h2>Loading...</h2>
  }
  
  const getValue = () => {
    return currentReplenish ? options.find(c => c.value === currentReplenish) : ''
  }

  const getConclusion = () => {
    return currentConclusion ? options.find(c => c.value === currentConclusion) : ''
  }
  const onChange = (newValue) => {
    setCurrentReplenish(newValue.value);
  }

  const onConclusion = (newValue) => {
    setCurrentConclusion(newValue.value);
  }

  return (
    <div className='containerFinance'>
      <div className='item1Finance'>
        <Sidebar />
      </div>
      <div className='item2Finance'>
        <div className='textFinanceAndLine'>
          <hr className='financeLine' />
          <p className='financeText'>Финансы</p>
        </div>
        <div className='transactionCardsContainer'>
          <div className='replenishTheBalanceCard'>
            <h1 className='replenishTheBalanceText'>
              Пополнение баланса
            </h1>
            <div className='inp1B'>
              <input
                className='inpPrice1'
                placeholder='0,000$'
              />
            </div>
            <p className='paymentMethodText'>Способ оплаты</p>
            <div className='inp2B'>
              <Select
                onChange={onChange}
                value={getValue()}
                options={options}
                classNamePrefix="customSelect"
              />
            </div>
            <div className='btnBlock'>
              <button className='btnfinanceGood'>
                Пополнить
              </button>
            </div>
          </div>
          <div className='withdrawalOfFundsCards'>
            <h1 className='replenishTheBalanceText'>
              Вывод средств
            </h1>
            <div className='inp1B'>
              <input
                className='inpPrice1'
                placeholder='0,000$'
              />
            </div>
            <p className='paymentMethodText'>Валюта вывода</p>
            <div className='inp2B'>
              <Select
                onChange={onConclusion}
                value={getConclusion()}
                options={options}
                classNamePrefix="customSelect"
              />
            </div>
            <div className='btnBlock'>
              <button className='btnfinanceGood'>
                Вывести средства
              </button>
            </div>
          </div>
        </div>
        <div className='historyTranzactionContainer'>
          <div className='historyCardTranzaction'>
            <p className='historyTranzactionText'>История транзакций</p>
            <div className='cardsSubTypeDateAndStatusTranzaction'>
              <div className='cardSubTypeDateAndStatusTranzactionHeader'>
                <p className='sumText'>Сумма</p>
                <p className='typeText'>Тип транзакции</p>
                <p className='dateText'>Дата</p>
                <p className='statusText'>Статус</p>
              </div>
            </div>
            <div className='cardsContainerFrom'>
              <div className='containerCard'>
                <div className="container mt-5">
                  <Posts posts={currentPosts} />
                  <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
