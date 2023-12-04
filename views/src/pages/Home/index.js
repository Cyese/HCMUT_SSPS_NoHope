import 'boxicons';
import { useContext } from 'react';
import background from '../../assets/home.jpg';
import { UserContext } from '../../utils/context/userContext';

import classNames from 'classnames/bind';
import { Bar } from 'react-chartjs-2';
import styles from './Home.module.css';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const cx = classNames.bind(styles);

function Home() {
  const { user } = useContext(UserContext);
  return user.loggedin && user.admin ? (
    <div className="Home">
      <main>
        <div className={cx('wrapper')}>
          <h1>Statistic</h1>
        </div>
        <ul className={cx('insights')}>
          <div>
            <box-icon classNames={cx('box')} name="copy-alt"></box-icon>
            <span classNames={cx('info')}>
              <h3>9981</h3>
              <p>Printed Pages</p>
            </span>
          </div>
          <div>
            <box-icon classNames={cx('box')} name="printer"></box-icon>
            <span classNames={cx('info')}>
              <h3>7749</h3>
              <p>Printed Times</p>
            </span>
          </div>
        </ul>
        <div style={{ maxWidth: '650px' }}>
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
                  data: [3487, 2123, 4678, 2931, 4012, 3569, 2748, 4891, 3226, 2075, 4523, 3776],
                  // Color of each bar
                  backgroundColor: 'aqua',
                  // Border color of each bar
                  borderColor: 'aqua',
                  borderWidth: 0.5,
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
      </main>
    </div>
  ) : (
    <div className={cx('wrapper')}>
      <img src={background} alt="background" />
    </div>
  );
}

export default Home;
