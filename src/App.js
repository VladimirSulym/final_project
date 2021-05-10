import logo from './logo.svg';
import './App.css';
import {
    fetchFailed,
    fetchSuccess,
    updateBrand,
    updateCatalogList,
    updateCategory,
    updateColor,
    updateLoading,
    updatePrice
} from "./store/action_creatores";
import React from "react";

function App() {

    function fetchData() {
        const data = fetch('//192.168.1.4/?controller=restcontroller&id=14213',
        // const data = fetch('//192.168.1.4/?controller=maincontroller&action=actionIndex',
            {
                // method: 'GET',
                // mode: 'no-cors'
                // headers: {
                //     'Access-Control-Allow-Origin': '*',
                //     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                //     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, PATCH, DELETE',
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json',
                // },
                // body: JSON.stringify({
                //     id: "5",
                //     name: "RRR",
                //     vendor: "SONY",
                //     model: "VIDEO",
                //     description: "URAAA!!!!"
                // })
            }
            );

        data
            .then(response => response.json())
            .then(response => console.log(response))
            .catch((e) => {console.log('САБОТАЖ: ошибка загрузки данных', e);})
            .finally(() => {});
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button
            className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
            onClick={fetchData}
        >
          resset
        </button>

          <h3>Загрузка файла</h3>
          <br/>
          <form action="//192.168.1.4/classes/loadFile.php" method="post" encType="multipart/form-data">
              <input type="file" name="img"/>
              <br />
                  <input type="submit" name="send" />
          </form>

      </header>

    </div>
  );
}

export default App;
