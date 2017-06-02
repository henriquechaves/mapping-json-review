import config from '../../server/config';

// import rawDataTest from '../../jsons/MOCK_DATA-test.json';
import rawData1 from '../../jsons/MOCK_DATA1.json';
import rawData2 from '../../jsons/MOCK_DATA2.json';
import rawData3 from '../../jsons/MOCK_DATA3.json';
import rawData4 from '../../jsons/MOCK_DATA4.json';
import rawData5 from '../../jsons/MOCK_DATA5.json';
import rawData6 from '../../jsons/MOCK_DATA6.json';
import rawData7 from '../../jsons/MOCK_DATA7.json';
import rawData8 from '../../jsons/MOCK_DATA8.json';
import rawData9 from '../../jsons/MOCK_DATA9.json';
import rawData10 from '../../jsons/MOCK_DATA10.json';

function readJSON() {

  const rawData = [];

  rawData[0] = rawData1;
  rawData[1] = rawData2;
  rawData[2] = rawData3;
  rawData[3] = rawData4;
  rawData[4] = rawData5;
  rawData[5] = rawData6;
  rawData[6] = rawData7;
  rawData[7] = rawData8;
  rawData[8] = rawData9;
  rawData[9] = rawData10;

  let res = [];

  for (var j = 0; j < 10; j++) {
    rawData[j].map(item => {
      res.push(item);
    });
  }

  return res;
  // return rawDataTest;
}

export default function loadLocalJSON() {
  return Promise.resolve(readJSON());
}
