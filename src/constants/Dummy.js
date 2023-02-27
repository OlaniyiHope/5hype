export const portfolio = {
  balance: '32761.65',
  changes: '+20%',
  type: 'I',
};

export const coins = [
  {
    id: 1,
    currency: 'Internet',
    symbol: 'BTC',
    image: require('../icons/int2.png'),
    amount: 'N20,000',
    changes: '12/03/2023, 12:49pm',
    type: 'I', //I = increase , D = Decrease
    wallet: {
      value: '4273.10',
      crypto: '0.023',
    },
  },
  {
    id: 2,
    currency: 'Airtime',
    symbol: 'ETH',
    image: require('../icons/pho.png'),
    amount: '4130',
    changes: '12/03/2023, 12:49pm',
    type: 'D', //I = increase , D = Decrease
    wallet: {
      value: '8200.10',
      crypto: '2',
    },
  },
  {
    id: 3,
    currency: 'IBEDC',
    symbol: 'BNB',
    image: require('../icons/eel.png'),
    amount: '501',
    changes: '12/03/2023, 12:49pm',
    type: 'I', //I = increase , D = Decrease
    wallet: {
      value: '3256',
      crypto: '6.3',
    },
  },
  {
    id: 4,
    currency: 'Transfer',
    symbol: 'Doge',
    image: require('../icons/tr2.png'),
    amount: '2421',
    changes: '12/03/2023, 12:49pm',
    type: 'I', //I = increase , D = Decrease
    wallet: {
      value: '4273.10',
      crypto: '1203',
    },
  },
  {
    id: 5,
    currency: 'Spectranet',
    symbol: 'XRP',
    image: require('../icons/wifi.png'),
    amount: '1.23',
    changes: '12/03/2023, 12:49pm',
    type: 'D', //I = increase , D = Decrease
    wallet: {
      value: '3219',
      crypto: '2800',
    },
  },
];

const bnb_price = '450';
const dummyData = {portfolio, coins, bnb_price};

export default dummyData;
