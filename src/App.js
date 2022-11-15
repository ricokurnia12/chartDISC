import './App.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js';
import React, { useState } from 'react';
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const HasilTest = () => {
  const graph1 = {
    labels: ['D', 'I', 'S', 'C'],
    datasets: [
      {
        label: 'GRAPH 1 MOST Mask Public Self',
        data: [-8, 5, -2, 3],

        borderColor: '#4472C4',
        tension: 0.8,
        fill: false,
        // pointStyle: 'rect',
        pointBorderColor: 'blue',
        pointBackgroundColor: '#fff',
        showLine: true,
        responsive: true,
      },
    ],
  };
  const graph2 = {
    labels: ['D', 'I', 'S', 'C'],
    datasets: [
      {
        label: 'GRAPH 1 MOST Mask Public Self',
        data: [5, 1, -2, 3],

        borderColor: '#4472C4',
        tension: 0.8,
        fill: false,
        // pointStyle: 'rect',
        pointBorderColor: 'blue',
        pointBackgroundColor: '#fff',
        showLine: true,
        responsive: true,
      },
    ],
  };
  const graph3 = {
    labels: ['D', 'I', 'S', 'C'],
    datasets: [
      {
        label: 'GRAPH 1 MOST Mask Public Self',
        data: [1, 1, 5, 5],

        borderColor: '#4472C4',
        tension: 0.8,
        fill: false,
        // pointStyle: 'rect',
        pointBorderColor: 'blue',
        pointBackgroundColor: '#fff',
        showLine: true,
        responsive: true,
      },
    ],
  };
  const options = {
    responsive: true,
    mainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'GRAPH 1 MOST Mask Public Self',
        font: { weight: '900' },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },

    scales: {
      xAxes: [
        {
          ticks: {
            min: 10,
            max: 100,
          },
        },
      ],
    },
  };

  const options2 = {
    responsive: true,
    mainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'GRAPH 2 LEAST Core Private Self',
        font: { weight: '900' },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },

    scales: {
      xAxes: [
        {
          ticks: {
            min: 10,
            max: 100,
          },
        },
      ],
    },
  };

  const options3 = {
    responsive: true,
    mainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'GRAPH 3 CHANGE Mirror Perceive Self',
        font: { weight: '900' },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },

    scales: {
      xAxes: [
        {
          ticks: {
            min: 10,
            max: 100,
          },
        },
      ],
    },
  };
  return (
    <div className="container">
      {/* ---top section--- */}
      <div className="header-hasil">
        <p>Pesonality System Graph Page</p>
      </div>
      <div id="data-hasil-test">
        <ul>
          <li>
            <b>Nama</b>: Rico Kurnia
          </li>
        </ul>
        <ul>
          <li>
            <b>Umur</b>: 23
          </li>
        </ul>
        <ul>
          <li>
            <b>Jenis Kelamin</b>: Laki-laki
          </li>
        </ul>
        <ul>
          <li>
            <b>Tanggal Tes</b>: 14 November 2022
          </li>
        </ul>
        <ul className="penempatan-jabatan">
          <li>
            <b>Proyeksi Penempatan Jabatan</b>:
          </li>
          <li>Pusat</li>
        </ul>
      </div>
      {/* ---end of top section--- */}
      {/* ---Gambaran karakter--- */}
      <div className="gambaran-karakter">
        <div className="div1">
          <h3>gambaran karakter</h3>
        </div>
        <div className="div2">
          <b>Most</b>
          <br></br>
          <b>Mask Public Self </b>
          <br></br>
          <b>Kepribadian di muka Umum</b>
          <br></br>
          <p>
            Gambaran bagaimana orang lain melihat diri kita. Persepsi
            tentang kita dilihat dari sisi luar.
          </p>
        </div>
        <div className="div3">
          <b>Most</b>
          <br></br>
          <b>Mask Public Self </b>
          <br></br>
          <b>Kepribadian di muka Umum</b>
          <br></br>
          <p>
            Gambaran bagaimana orang lain melihat diri kita. Persepsi
            tentang kita dilihat dari sisi luar.
          </p>
        </div>
        <div className="div4">
          <b>Most</b>
          <br></br>
          <b>Mask Public Self </b>
          <br></br>
          <b>Kepribadian di muka Umum</b>
          <br></br>
          <p>
            Gambaran bagaimana orang lain melihat diri kita. Persepsi
            tentang kita dilihat dari sisi luar.
          </p>
        </div>
        <div className="div5">
          <h5>Assesor</h5>
          <br></br>
          <ul>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
          </ul>
        </div>
        <div className="div6">
          <h5>Assesor</h5>
          <br></br>
          <ul>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
          </ul>
        </div>
        <div className="div7">
          <h5>Assesor</h5>
          <br></br>
          <ul>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
            <li>
              <p>Analitis</p>
            </li>
          </ul>
        </div>
      </div>
      {/* ---end of gambaran karakter--- */}
      {/* -----------grafik------------- */}
      <div className="chart-result">
        <div clasName="graph-1" style={{ width: '90%' }}>
          <Line options={options} data={graph1}></Line>
        </div>
        <div clasName="graph-2" style={{ width: '90%' }}>
          <Line options={options2} data={graph2}></Line>
        </div>
        <div className="graph-3" style={{ width: '90%' }}>
          <Line options={options3} data={graph3}></Line>
        </div>
      </div>
      {/* -----------end of grafik------------- */}
      {/* <--------------Deskripsi kepribadian-----------> */}
      <div className="deskripsi-kepribadian">
        <h2>Deskripsi kepribadian</h2>

        <p>
          Berpikir sistematis dan cenderung mengikuti prosedur dalam
          kehidupan pribadi dan pekerjaannya. Teraturt dan memiliki
          perencanaan yang baik, ia teliti dan fokus pada detil. 
          Bertindak dengan penuh kebijaksanaan, diplomatis dan jarang
          menentang rekan kerjanya dengan sengaja.  Ia sangat
          berhati-hati, sungguh-sungguh mengharapkan akurasi dan
          standard tinggi dalam pekerjaannya. Ia cenderung terjebak
          dalam hal detil, khususnya jika harus memutuskan. 
          Menginginkan adanya petunjuk standard pelaksanaan kerja dan
          tanpa perubahan mendadak.
        </p>
      </div>
      {/* <--------------End Deskripsi kepribadian-----------> */}
      <div className="job-match">
        <h2>Job Match</h2>

        <p>
          Berpikir sistematis dan cenderung mengikuti prosedur dalam
          kehidupan pribadi dan pekerjaannya. Teraturt dan memiliki
          perencanaan yang baik, ia teliti dan fokus pada detil. 
          Bertindak dengan penuh kebijaksanaan, diplomatis dan jarang
          menentang rekan kerjanya dengan sengaja.  Ia sangat
          berhati-hati, sungguh-sungguh mengharapkan akurasi dan
          standard tinggi dalam pekerjaannya. Ia cenderung terjebak
          dalam hal detil, khususnya jika harus memutuskan. 
          Menginginkan adanya petunjuk standard pelaksanaan kerja dan
          tanpa perubahan mendadak.
        </p>
      </div>
    </div>
  );
};

export default HasilTest;
