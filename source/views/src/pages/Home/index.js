import 'boxicons';
import { useContext, useState, useEffect } from 'react';
import background from '../../assets/home.jpg';
import { UserContext } from '../../utils/context/userContext';

import classNames from 'classnames/bind';
import { Bar } from 'react-chartjs-2';
import styles from './Home.module.css';

import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import axios from '../../utils/api/axios';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const cx = classNames.bind(styles);

function Home() {
  const { user } = useContext(UserContext);

  const [quantity, setQuantity] = useState({count: 0, totalPrintedPaper: 0});
  useEffect(() => {
    if (user.admin){
      const getQuantity = async ()=>{
        const res = await axios.get('/spso');
        if (res) setQuantity(res);
      }
      getQuantity();
    }
  }, [user.admin]);

  return user.loggedin && user.admin ? (
    <div className="Home">
      <main>
        <div className={cx('wrapper')}>
          <h1>Statistic</h1>
        </div>
        <div className={cx('insights')}>
          <div>
            <box-icon classNames={cx('box')} name="copy-alt"></box-icon>
            <span classNames={cx('info')}>
              <h3>{quantity.totalPrintedPaper}</h3>
              <p>Printed Pages</p>
            </span>
          </div>
          <div>
            <box-icon classNames={cx('box')} name="printer"></box-icon>
            <span classNames={cx('info')}>
              <h3>{quantity.count}</h3>
              <p>Printed Times</p>
            </span>
          </div>
        </div>
        <div className={cx('graphs')}>
          <div>
            <Bar
              data={{
                // Name of the variables on x-axies for each bar
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
                datasets: [
                  {
                    // Label for bars
                    label: 'Total printed pages',
                    // Data or value of your each variable
                    data: [5123, 6891, 4078, 8672, 4935, 7456, 3089, 9921, 5764, 7234, 8593, 9981],
                    // Color of each bar
                    backgroundColor: 'rgba(30, 144, 255, 0.2)',
                    // Border color of each bar
                    borderColor: 'dodgerblue',
                    borderWidth: 1,
                  },
                ],
              }}
              // Height of graph
              height={400}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        // The y-axis value will start from zero
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 15,
                  },
                },
              }}
            />
          </div>
          <div>
            <Bar
              data={{
                // Name of the variables on x-axies for each bar
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
                datasets: [
                  {
                    // Label for bars
                    label: 'Total printed times',
                    // Data or value of your each variable
                    data: [4578, 6789, 3921, 8562, 4826, 7391, 3012, 9876, 5643, 7123, 8492, 7749],
                    // Color of each bar
                    backgroundColor: 'rgba(30, 144, 255, 0.2)',
                    // Border color of each bar
                    borderColor: 'dodgerblue',
                    borderWidth: 1,
                  },
                ],
              }}
              // Height of graph
              height={400}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        // The y-axis value will start from zero
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 15,
                  },
                },
              }}
            />
          </div>
        </div>
      </main>
    </div>
  ) : (
    <div className={cx('wrapper')}>
      <img src={background} alt="background" />
    </div>
  );
}

export default Home;
