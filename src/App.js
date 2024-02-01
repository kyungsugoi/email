import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { SearchBar } from './components/searchbar/searchbar.component';
import { EmailStream } from './components/emailstream/emailstream.component';

function App() {
  const [emails, setEmails] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [buttonClicked, setButtonClicked] = useState("");

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await axios(
          'https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json',
        );
        setEmails(response.data);
      };
    fetchEmails();
  }, []);

  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = emails
    } else {
      filtered = emails.filter(email =>
        email.subject.toLowerCase().includes(searchInput.toLowerCase())
        );
      }
    setFilteredEmails(filtered);
    }, [emails, searchInput]);

  const handleInput = e => {
    setSearchInput(e.target.value)
  };

  function handleInboxClick() {
    setButtonClicked("inbox");
  };
  function handleDeletedClick() {
    setButtonClicked("deleted");
  };

  useEffect(() => {
    let filtered = [];
    filtered = emails.filter(email =>
        email.tag === buttonClicked
        );
    setFilteredEmails(filtered);
    }, [emails, buttonClicked]);

  return (
    <div className="App">
      {/* <h1>placeholder</h1>*/}
      <SearchBar
        placeholder='Search Emails'
        handleInput={handleInput}
      />
      <button onClick={handleInboxClick}>inbox</button>
      <button onClick={handleDeletedClick}>deleted</button>

      <EmailStream emails = {filteredEmails}/>
    </div>
  );
}

export default App;
