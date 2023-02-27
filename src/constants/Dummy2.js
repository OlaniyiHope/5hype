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

    amount: 'N20,000',

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

    amount: '4130',

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

    amount: '501',

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

    amount: '2421',

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

    amount: '1.23',

    type: 'D', //I = increase , D = Decrease
    wallet: {
      value: '3219',
      crypto: '2800',
    },
  },
];

const bnb_price = '450';
const dummyData2 = {portfolio, coins, bnb_price};

export default dummyData2;
