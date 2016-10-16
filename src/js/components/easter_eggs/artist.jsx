import React from 'react'

export default class Artist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recognition: new webkitSpeechRecognition(),
      transcript: []
    }
  }

  componentWillMount() {
    const recognition = this.state.recognition
    recognition.continuous = true
    recognition.interimResults = false

    recognition.onstart = () => console.log("Starting web speech recognition")
    recognition.onresult = (e) => {
      console.log(e)
      const results = Array.from(e.results).map(r => r[0].transcript)
      this.setState({
        transcript: results
      })  
    }

    recognition.start()
  }

  render() { 
    const transcript = this.state.transcript

    return (
      <div className="dev-artist">
        {transcript.join()}
      </div>
    )
  }
}
