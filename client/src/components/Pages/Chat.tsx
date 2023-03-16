import React from 'react'
import { ChatEngine } from 'react-chat-engine'


function Chat(): JSX.Element {
  return (
    <ChatEngine
      publicKey={'ee1a042c-0dd1-48d7-aff6-b00ca94573cc'}
      userName={'Takumi'}
      userSecret={'123'}
    />
  )
}

export default Chat