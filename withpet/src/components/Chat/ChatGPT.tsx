import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import spritesIcon from 'assets/sprites_icon.png'

interface APIResponse {
  choices: Array<{
    text: string
    finish_reason: string
    index: number
  }>
}

const ChatGPT: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!inputValue) return

  const API_URL = 'https://api.openai.com/v1/engine/davinci-codex/completions'
            
  //키 숨켜야함.
  const API_KEY = 'sk-'
  const prompt = inputValue
  const data = {
    prompt,
    max_tokens: 50,
    n: 1,
    stop: null,
    temperature: 0.7,
  }

    axios
      .post<APIResponse>(API_URL, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((response: AxiosResponse<APIResponse>) => {
        const newMessages = [...messages, response.data.choices[0].text]
        setMessages(newMessages)
        setInputValue('')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="flex-1 h-40 overflow-auto p-4">
        <ul className="space-y-2">
          {messages.map((message, index) => (
          <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleFormSubmit} className="flex-none p-4">
        <div className="flex rounded-full bg-primary-100">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..."
            className="w-full p-2 bg-transparent focus:outline-none rounded-l-full"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-r-full "
            style = {{
              backgroundImage: `url(${spritesIcon})`,
              backgroundPosition: '-2px -358px',
              width:'25px',
              height: '25px' }}
          >
          </button>
        </div>
      </form>
    </div>

  )
}

export default ChatGPT

