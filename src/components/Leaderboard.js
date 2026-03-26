import React from 'react';
import './Leaderboard.css';

const leaderboardData = [
  { rankF1: 1, rankConf: 1, author: 'Mark Kramer', f1: '0.4502', institution: 'Boston University, Johns Hopkins University', model: 'Two-step pipeline (base seizure likelihood, compact final classifier)' },
  { rankF1: 2, rankConf: '', author: 'Pattu Ramesh R', f1: '0.4286', institution: 'National Institute of Technology Tiruchirappalli India', model: '1D CNN-LightGBM' },
  { rankF1: 3, rankConf: 2, author: 'Amir Hossein Daraie', f1: '0.4048', institution: 'Johns Hopkins University USA', model: 'Ensemble of a 1D ResNet and XGBoost' },
  { rankF1: 4, rankConf: '', author: 'Katherine Walsh', f1: '0.3984', institution: 'University of Pennsylvania', model: 'Graph Convolutional Network-bidirectional Gated Recurrent Unit' },
  { rankF1: 5, rankConf: '', author: 'Soujanya Hazra', f1: '0.3923', institution: 'Indian Institute of Technology Kharagpur', model: 'Spatio-temporal graph convolutional network with attention-based MIL ensemble' },
  { rankF1: 6, rankConf: '', author: 'Matteo Moro', f1: '0.36', institution: 'DIBRIS and MaLGa University of Genova', model: 'Multi-stream spatio-temporal graph convolutional network (ST-GCN)-BlazePose' },
  { rankF1: 7, rankConf: '', author: 'Isabel Sarzo Wabi', f1: '0.358', institution: 'University of Montreal CR CHUM', model: 'Mutual information-XGBoost' },
  { rankF1: 8, rankConf: '', author: 'Magnus Guldberg Pedersen', f1: '0.3574', institution: 'BrainCapture DTU Compute', model: 'Gradient-Boosted Ensemble' },
  { rankF1: 9, rankConf: '', author: 'Jonathan Haag', f1: '0.3506', institution: 'University of Stuttgart', model: 'Rank-averaged ensemble of Graph Transformer and XGBoost' },
  { rankF1: 10, rankConf: '', author: 'Lucia Rhode', f1: '0.3342', institution: 'Johns Hopkins University', model: 'PoseC3D-MMAction2' },
  { rankF1: 11, rankConf: '', author: 'Sergio Eduardo Sanchez Hernandez', f1: '0.3294', institution: 'Universidad de Guadalajara', model: 'XGBoost' },
  { rankF1: 12, rankConf: '', author: 'Matteo Moro', f1: '0.3267', institution: 'DIBRIS and MaLGa University of Genova', model: 'ST-GCN-MMAction2' },
  { rankF1: 13, rankConf: '', author: 'Daniel Alejandro Galindo Lazo', f1: '0.3168', institution: 'University of Montreal CR CHUM', model: '1D Temporal Convolutional Network-Gated Multiple Instance Learning (MIL) attention' },
  { rankF1: 14, rankConf: '', author: 'Isabel Sarzo Wabi', f1: '0.3158', institution: 'University of Montreal CR CHUM', model: 'Mutual information-TabNet' },
  { rankF1: 14, rankConf: '', author: 'Hugo Velez', f1: '0.3158', institution: 'Centro Universitario de Ciencias Exactas e Ingeniería Universidad de Guadalajara', model: 'Ensemble of 3 LSTM' },
  { rankF1: 14, rankConf: '', author: 'Hugo Abraham Velez Perez', f1: '0.3158', institution: 'Bioingeniería Traslacional CUCEI Universidad de Guadalajara', model: 'Ensemble of 3 LSTM' },
  { rankF1: 17, rankConf: '', author: 'Elakkat D Gireesh', f1: '0.3138', institution: 'AdventHealth Orlando Florida USA', model: 'Vision transformer' },
  { rankF1: 18, rankConf: '', author: 'Matteo Moro', f1: '0.3137', institution: 'DIBRIS and MaLGa University of Genova', model: 'Ensemble model based on majority voting over three ST-GCN-MMAction2' },
  { rankF1: 19, rankConf: '', author: 'Philip Ridder', f1: '0.3006', institution: 'Knappschaft Kliniken University Hospital Bochum', model: 'Time Series Based machine learning classifier' },
  { rankF1: 20, rankConf: '', author: 'Babajide Owoyele', f1: '0.2975', institution: 'Hasso Plattner Institute Postdam Germany', model: 'Dual-architecture ensemble of CNN-GRU and Temporal Convolutional Network (TCN)' },
  { rankF1: 21, rankConf: '', author: 'Alejandro Diaz Montes de Oca', f1: '0.2915', institution: 'Universidad de Guadalajara', model: 'XGBoost-Savitzky Golay filter' },
  { rankF1: 22, rankConf: '', author: 'Nagham Daood', f1: '0.2682', institution: 'University of Haifa', model: 'Ensemble of five Spatio-Temporal Virtual Graph (STViG)' },
  { rankF1: 23, rankConf: '', author: 'Ahmed Alramly', f1: '0.2515', institution: 'Frankfurt Institute for Advanced Studies', model: 'Conv3d' },
  { rankF1: 24, rankConf: '', author: 'Preeti Ramesh', f1: '0.2', institution: 'University of Southern California', model: 'MultiChannelCNN' },
  { rankF1: 25, rankConf: '', author: 'Ahmed Alramly', f1: '0.1856', institution: 'Frankfurt Institute for Advanced Studies', model: 'Conv2d' },
  { rankF1: 26, rankConf: '', author: 'Xiaoling Huang', f1: '0.1731', institution: 'University of Alabama at Birmingham', model: 'Graph spatial-temporal' },
  { rankF1: 27, rankConf: '', author: 'Surya Pandiaraju', f1: '0.1453', institution: 'Johns Hopkins University', model: 'Ensemble of 1D ResNet and XGBoost' },
  { rankF1: '', rankConf: '', author: 'Jeremy Slater', f1: 'No running algorithm submitted', institution: 'Colorado State University', model: 'Simple Baseline CNN' },
  { rankF1: '', rankConf: '', author: 'Shilpa Prakash', f1: 'No running algorithm submitted', institution: 'Government First Grade College Kuvempunagar Mysore Karnataka India', model: 'PoseCNN-BiLSTM' },
];

export default function Leaderboard() {
  return (
    <div className="leaderboard-container">
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank (F1)</th>
            <th>Rank (Conf)</th>
            <th>Author</th>
            <th>F1 Score</th>
            <th>Institution</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((item, index) => (
            <tr key={index} className={item.rankF1 !== '' && item.rankF1 <= 3 ? `top-${item.rankF1}` : ''}>
              <td>{item.rankF1}</td>
              <td>{item.rankConf}</td>
              <td className="author-cell">{item.author}</td>
              <td className={`f1-cell ${isNaN(parseFloat(item.f1)) && item.f1 !== '' ? 'f1-text' : ''}`}>{item.f1}</td>
              <td>{item.institution}</td>
              <td className="model-cell">{item.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
