import React, { Component } from 'react';
import { Picker } from 'emoji-mart';
import copy from 'copy-to-clipboard';

import 'emoji-mart/css/emoji-mart.css';
import './App.css';

import Nav from './Nav';

class App extends Component {
  state = {
    selectedEmoji: null,
    successfulCopy: false,
    successfulCopyTimeout: null,
  };

  copyEmojiToKeyboard = e => {
    clearTimeout(this.state.successfulCopyTimeout);
    this.setState({ selectedEmoji: e, successfulCopy: false }, this.startCopy);
  };

  startCopy = () => {
    copy(this.state.selectedEmoji.native);

    this.setState(
      {
        successfulCopy: true,
      },
      this.timeoutSuccessfulCopy,
    );
  };

  timeoutSuccessfulCopy = () => {
    const successfulCopyTimeout = setTimeout(() => {
      this.setState({
        successfulCopy: false,
      });
    }, 1500);

    this.setState({
      successfulCopyTimeout,
    });
  };

  getSuccessMessageClassName = () => {
    const baseClassName = 'SuccessMessage';

    if (this.state.successfulCopy) {
      return `${baseClassName} visible`;
    } else {
      return `${baseClassName} hidden`;
    }
  };

  getSelectedNativeEmoji = () => {
    const { selectedEmoji } = this.state;
    return selectedEmoji && selectedEmoji.native;
  };

  render() {
    return (
      <div className="">
        <Nav />
        <div className="App">
          <h1 className="Title">
            <span role="img" aria-label="clipboard emoji">
              📋
            </span>
            EmojiCopy
          </h1>
          <div className="PickerContainer">
            <Picker onSelect={this.copyEmojiToKeyboard} />
          </div>
          <span className={this.getSuccessMessageClassName()}>
            Copied {this.getSelectedNativeEmoji()} to clipboard!
          </span>
        </div>
      </div>
    );
  }
}

export default App;
