'use strict';
import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import ResidencePicker from 'components/pickers/residence-picker.jsx';
import RegisterQuestion from 'components/register-question/register-question.jsx';
import PickersAction from 'actions/pickers-action';
import PickersStore from 'stores/pickers-store';

require('./register-page.scss');

var RegisterPage = React.createClass({
  mixins: [Reflux.connect(PickersStore)],

  getInitialState: function() {
    return {
      answers: [undefined, undefined, undefined, undefined], // need to figure this out
      residenceId: -1
    };
  },

  componentWillMount: function() {
    PickersAction.fetchResidences();
  },

  handleQuestion: function(id, answer) {
    var newAnswers = this.state.answers;
    newAnswers[id] = answer;
    this.setState({
      answer: newAnswers
    });
  },

  render: function() {
    var isResidencesFatched = false;
    if (!_.isEmpty(this.state.residences)) {
      isResidencesFatched = true;
    }

    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <hr/>
        <form>
          <ResidencePicker residences={ isResidencesFatched ? this.state.residences : [] }/>
          <RegisterQuestion
            handler={ this.handleQuestion }
            questionId={ 0 }
            text="It's a Friday night, would you stay home or head out for a drink?"
            yesText="Party"
            noText="Stay home"
          />
          <RegisterQuestion
            handler={ this.handleQuestion }
            questionId={ 1 }
            text="Do you play any sports?"
          />
          <RegisterQuestion
            handler={ this.handleQuestion }
            questionId={ 2 }
            text="It’s the finals period and your friend’s birthday party is here, what would you do?"
            yesText="Party"
            noText="Stay of course"
          />
          <RegisterQuestion
            handler={ this.handleQuestion }
            questionId={ 3 }
            text="Are you an introvert or extrovert?"
          />
        </form>
      </div>
    );
  }
});

module.exports = RegisterPage;
